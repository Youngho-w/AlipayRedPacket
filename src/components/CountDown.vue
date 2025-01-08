<template>
  <div class="countdown">
    <span>{{ formattedTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  props: {
    // 接收一个以秒为单位的倒计时时长
    timeLeft: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      remainingTime: this.timeLeft // 剩余时间，以秒为单位
    };
  },
  computed: {
    // 格式化时间显示
    formattedTime() {
      const hours = Math.floor(this.remainingTime / 3600);
      const minutes = Math.floor((this.remainingTime % 3600) / 60);
      const seconds = this.remainingTime % 60;

      // 格式化为 HH:MM:SS
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  },
  mounted() {
    // 定时器，每秒更新一次剩余时间
    this.timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1;
      } else {
        clearInterval(this.timer); // 倒计时结束，清除定时器
      }
    }, 1000);
  },
    beforeUnmount() {
    // 组件销毁前清除定时器
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.countdown {
  font-size: 24px;
  font-weight: bold;
}
</style>
