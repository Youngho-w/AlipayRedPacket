<template>

  <div class="common-layout">
    <el-container>
      <el-main style="justify-content: center">
        <div style="display: flex; justify-content: center">
          <el-card style="max-width: 480px;">
            <template #header>
              <el-text class="mx-1" size="large" tag="b" :type="textType">{{ title }}</el-text>
              <br>
              <el-text class="mx-1" size="large" tag="i" v-if="noStart">
                2024-11-11 11:11:11 准时开抢～
              </el-text>
              <Countdown :timeLeft="time" v-if="this.time>0"></Countdown>
            </template>
            <el-image src=https://file.dongyoung.wang/boy.png
                      style="width: 55%; margin: -10% 0 0 -50%;" alt="Image"
                      @click="navigateToUrl"
                      v-if="isRed">
            </el-image>
            <el-image src=https://file.dongyoung.wang/girl.png
                      style="width: 58%; margin: -250% 0 8% 51%;" alt="Image"
                      @click="navigateToUrl"
                      v-if="isRed">
            </el-image>
            <!-- 红包图片 -->
            <el-image :src="url" style="width: 100%; margin-top: -38%;" alt="Image"
                      @click="navigateToUrl" v-if="isRed">
            </el-image>
            <!-- 视频图片 -->
            <el-image :src="url" alt="Image" @click="navigateToUrl" @load="loadSuccess" v-else>
            </el-image>
            <div style="margin: -7% 1% 0 0; position: relative; z-index: 1; text-align: right">
              <el-text class="mx-1" size="small" tag="i" v-if="isRed">
                红包编码: {{
                  this.url.split('2om')[1].replace('.png', '')
                }}
              </el-text>
            </div>

            <template #footer>
              <div>
                <el-text class="mx-1" size="large" tag="mark" v-if="isRed">
                  支付宝
                  <el-avatar shape="circle" :size="25" style="margin-bottom: 10px"
                             src="https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico"/>
                  扫码领红包~
                </el-text>
                <el-text class="mx-1" size="large" tag="mark" v-if="isWhat">
                  长按或微信
                  <el-avatar shape="circle" :size="25"
                             src="https://file.dongyoung.wang/wechat.jpg"/>
                  扫码打开~
                </el-text>
              </div>
              <el-text class="mx-1" type="danger" v-if="isView">{{
                  surprise
                }}
              </el-text>
              <el-text class="mx-1" type="success" v-else>
                喜乐有分享，共度日月长～
              </el-text>
            </template>
          </el-card>
        </div>


      </el-main>
      <el-footer style="margin-top: 1%">
        <div style="display: flex; justify-content: center">
          <el-text class="mx-1" type="info" size="small" tag="i">{{
              desc
            }}
          </el-text>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 5px">
          <el-text class="mx-1" type="warning" size="small">
            <span>© 2023-2024 DXR All Rights Reserved </span>
            <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">沪ICP备2023014989号</a>
          </el-text>
        </div>

      </el-footer>
    </el-container>
  </div>

</template>

<script>
import axios from 'axios';
import base64 from "base-64";
import Countdown from "@/components/CountDown.vue";

export default {
  components: {Countdown},
  name: 'App',
  data() {
    return {
      desc: '',
      ip: '',
      date: 0,
      url: 'https://file.dongyoung.wang/default.png',
      title: '感谢见证我们幸福的时刻',
      surprise: '恭喜你! 获得最大金额红包～',
      textType: 'primary',
      isView: false,
      isRed: false,
      isWhat: false,
      noStart: false,
      time: 0,
    };
  },
  created() {
    this.getUserIP();
  },
  methods: {
    getUserIP() {
      const urls = [
        "https://file.dongyoung.wang/A3V5NEU5g.png",
        "https://file.dongyoung.wang/ACFHzXMCx.png",
        "https://file.dongyoung.wang/ACFHzXMCx.png",
        "https://file.dongyoung.wang/ACFHzXMCx.png",
        "https://file.dongyoung.wang/Acp0M5b73.png",
        "https://file.dongyoung.wang/Acp0M5b73.png",
        "https://file.dongyoung.wang/Acp0M5b73.png",
        "https://file.dongyoung.wang/Acp0M5b73.png",
        "https://file.dongyoung.wang/AmcaTBqIY.png",
        "https://file.dongyoung.wang/AmcaTBqIY.png",
      ]
      const redUrls = [
        'https://file.dongyoung.wang/2/2om14430ghcmojnuqwnw54b.png',
        'https://file.dongyoung.wang/2/2om14541tnmliodhe94c537.png',
        'https://file.dongyoung.wang/2/2om14957plgqc63zdfyztc1.png',
        'https://file.dongyoung.wang/2/2om15032pifvtag56hw01c7.png',
        'https://file.dongyoung.wang/2/2om15175p8nmaxohndzqe6d.png',
        'https://file.dongyoung.wang/2/2om15466k1tr4lpyw8qeh4d.png',
        'https://file.dongyoung.wang/2/2om15618u7ccjuxz639egda.png',
        'https://file.dongyoung.wang/2/2om15805jiajqlk9wpdjv36.png',
        'https://file.dongyoung.wang/2/2om15952aabqqd0spqmti3b.png',
        'https://file.dongyoung.wang/2/2om16044bxh8zaupmzf3td2.png',
        'https://file.dongyoung.wang/2/2om16185ejq9jhjmkjxdo68.png',
        'https://file.dongyoung.wang/2/2om16208cwqxhbc1itu1zf1.png',
        'https://file.dongyoung.wang/2/2om16729z9geracxgag6zd1.png',
        'https://file.dongyoung.wang/2/2om16886vtioombvqplg2f2.png',
        'https://file.dongyoung.wang/2/2om17081rjbk8u6g6lvbbb3.png',
        'https://file.dongyoung.wang/2/2om17178zzde1hvablvgnef.png',
        'https://file.dongyoung.wang/2/2om17257zi90oge2owher1b.png',
        'https://file.dongyoung.wang/2/2om17372td4knnhgvsrd961.png',
        'https://file.dongyoung.wang/2/2om17977nklenbpshgpe687.png',
        'https://file.dongyoung.wang/2/2om18042cinnvgiy2cjpj53.png',
        'https://file.dongyoung.wang/2/2om18046cvjpth3hagcpo90.png',
        'https://file.dongyoung.wang/2/2om18429eqsrjyxo8yx4tf8.png',
        'https://file.dongyoung.wang/2/2om18429mres6axfzc6wwac.png',
        'https://file.dongyoung.wang/2/2om18584nom5p7ef527ms4b.png',
        'https://file.dongyoung.wang/2/2om18984hosd86r9m3riuad.png',
        'https://file.dongyoung.wang/2/2om19189ko8d44y1rqxz019.png',
        'https://file.dongyoung.wang/2/2om19581t51we6crlbbnaac.png',
        'https://file.dongyoung.wang/2/2om19687nat1vxw83wirw11.png',
        'https://file.dongyoung.wang/2/2om19822gychnebncgghm82.png',
        'https://file.dongyoung.wang/2/2om106686gl2qv1jyxcbx80.png',
        'https://file.dongyoung.wang/2/2om119697fnmgiru1uj0fe9.png',
        'https://file.dongyoung.wang/2/2om148274xjmlkgodzoko9d.png',
        'https://file.dongyoung.wang/2/2om168114ditw51s30hwh2c.png',
        'https://file.dongyoung.wang/2/2om197157uflqaeqj4e1z1b.png',
        'https://file.dongyoung.wang/2/2om1283108m5mil5bzl2ld9.png',
      ]

      const waitUrls = [
        'https://file.dongyoung.wang/wait1.jpg',
        'https://file.dongyoung.wang/wait2.png',
      ];

      axios.get('https://dongyoung.wang').then(response => {
        console.log('Your x-real-ip is: ', response.headers['x-real-ip']);
        console.log('Your x-time is: ', response.headers['x-time']);

        // 获取ip
        this.ip = response.headers['x-real-ip'];
        // 获取时间
        this.date = new Date(response.headers['x-time']).getTime();
        this.desc = Math.random() < 0.6 ? '刷新页面，有机会获得隐藏红包～' : '您的IP地址是：'
            + this.ip;
      }).catch(error => {
        console.error('There was an error fetching the IP address: ', error);
        // 移动端ip可能拿不到
        this.desc = '获取IP失败，请刷新页面重试';
      }).finally(() => {

        // cookie中存储图片url
        const urlCookie = this.$cookies.get('imageUrl');
        if (urlCookie) {
          this.url = urlCookie;
        } else {
          // 第一次进来
          if (this.date < 1731294671000) {
            this.url = waitUrls[Math.floor(Math.random() * waitUrls.length)];
            this.title = '请稍候!!!';
            this.noStart = true;
            this.time = Math.floor((1731294671 - this.date / 1000));
          } else {
            this.url = urls[Math.floor(Math.random() * urls.length)];
          }
          // 后面进来拿cookie值
          this.$cookies.set('imageUrl', urls[Math.floor(Math.random() * urls.length)], 60 * 60);
        }

        // 隐藏红包， 越往后概率越大，领到一个后几率变小
        const prefix = 'maWxl5qcGVnLmR';
        const redUrlsCookie = this.$cookies.get('redUrls');
        // 领到一个后几率变小
        let present = 0.4;
        if (redUrlsCookie !== null && redUrlsCookie !== '-1' &&
            redUrls.length - base64.decode(redUrlsCookie.replace(prefix, '')).split(',').length
            < 3) {
          present = 0.05;
        }
        console.log('winning percentage is: ', present);
        if (Math.random() < present) {
          // 11月11日 11:11:11后才可领取
          if (this.date < 1731294671000) {
            this.url = waitUrls[Math.floor(Math.random() * waitUrls.length)];
            this.title = '请稍候!!!';
            this.noStart = true;
            this.time = Math.floor((1731294671 - this.date / 1000));
          } else {
            // 红包领完了
            if (redUrlsCookie === '-1') {
              this.url = 'https://file.dongyoung.wang/over.png';
              this.title = '手慢了! 红包已经被抢完了～';
            } else {
              this.isRed = true
              const redUrlCookie = this.$cookies.get('redUrl');
              // 如果已经抢过，5分钟内默认取cookie
              if (redUrlCookie) {
                this.textType = 'success';
                this.title = '您已经领过红包了～';
                this.url = base64.decode(redUrlCookie);
              } else {
                let tempRedUrls = redUrlsCookie === null ? redUrls :
                    base64.decode(redUrlsCookie.replace(prefix, '')).split(',');
                this.url = tempRedUrls[Math.floor(Math.random() * tempRedUrls.length)];
                this.title = '恭喜你! 获得隐藏红包';
                this.$cookies.set('redUrl', base64.encode(this.url), 60 * 5);
                tempRedUrls.splice(this.url, 1);
                if (tempRedUrls.length === 0) {
                  this.$cookies.set('redUrls', -1, 60 * 60 * 2);
                } else {
                  // base64编码 防止被轻易破解
                  const temp = base64.encode(tempRedUrls.join(','));
                  const int = Math.floor(Math.random() * temp.length);
                  this.$cookies.set('redUrls',
                      temp.substring(0, int) + prefix + temp.substring(int),
                      60 * 60 * 2);
                }
              }
            }
          }
        } else {
          this.isWhat = true;
        }
        this.notify();
      });
    },
    notify() {
      console.log('notify Your ip is: ', this.ip);
      const url = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=c07113b4-dd6f-46c0-ab36-339cd59414';
      const request = '{\n'
          + '  "msgtype": "text",\n'
          + '  "text": {\n'
          + '    "content": "ip：' + this.ip + '\\n url：' + this.url + '"\n'
          + '  }\n'
          + '}'
      axios.post(url, request).then(() => {
      }).catch(error => {
        console.error('There was an error fetching the IP address: ', error);
      });
    },
    navigateToUrl() {
      const videoUrls = [
        'https://channels.weixin.qq.com/mobile/commonFinderJsApi.html?api=openFinderView&extInfo=%7B%22action%22:%22openFinderFeed%22,%22feedID%22:%22https://weixin.qq.com/sph/A0EhjEP3U%22,%22notGetReleatedList%22:1,%22shareScene%22:40,%22commentScene%22:40,%22reportExtraInfo%22:%22%7B%5C%22sys_scene%5C%22:1%7D%22%7D&exportkey=n_ChQIAhIQr9CwhtXhYbBEX2Xa%2FD4vwBL9AQIE97dBBAEAAAAAAAX3Nay8Au8AAAAOpnltbLcz9gKNyK89dVj0bQJzipfHEVJxd2dstoSeS3qsWWTW2sWT2iOKWLzccW2zZYDRR63%2Fd9oGEzGR0a4d7vqXE%2B7XCoejlF9zhZSNLt5ldBJR27J82jJLEakQ82b2kOj7vf6FrdU269C8nTQksuhURg0VbZHFtiUaThMItAGkkiEQLRPdNotZ%2BbhgvLBk4i%2Fl03lJU%2FG0lSK94kVbSSuM%2B%2BhqrqJcY30F7316LkkeQxEqpXeAQVVGTg4bJ0AFkzICuRt4jwbgFeXqSnXuNpWtiXQd4D0eKeqBlaDG7szBCH2BQk0%3D&pass_ticket=n6ZdxCypghzGXiSXgg4tEJ4iwGklE3ykUBebcOv7khWxKz0tEqGymgQP4oonHuBDXTUdbWg8cUdmxlcNFbrHYA%3D%3D&wx_header=0',
        'https://channels.weixin.qq.com/mobile/commonFinderJsApi.html?api=openFinderView&extInfo=%7B%22action%22:%22openFinderFeed%22,%22feedID%22:%22https://weixin.qq.com/sph/Apijgegvc%22,%22notGetReleatedList%22:1,%22shareScene%22:40,%22commentScene%22:40,%22reportExtraInfo%22:%22%7B%5C%22sys_scene%5C%22:1%7D%22%7D&exportkey=n_ChQIAhIQ8xW8G5OfHiRWANA61IN6RBL9AQIE97dBBAEAAAAAAHjzLgIScVUAAAAOpnltbLcz9gKNyK89dVj09DEMcNWoBdnvswSmOHCEk8tkrsqbjII5fRfl4Ao%2B0tQqrbAnkzFYmbTrSgiKKnmb2MqL9r6I3cf01POFdnev8dHScF4ppqkAv%2B%2Fvdt82kA2oNy0wOhWzyF9vM6UWZ2lSdaUA9v67DQpgOpH2sogCnQsKV3h1QOePXdgF7L1KBGHi4aA9WWUPrkMvt%2FNcnjIEOSHiNj1za75yZoT5A5jmgQ2F6HEi3fztDPwPxksDBXmXz9vP5%2ByyxaHTFJYxVMJkkYEDPKA5pF1GHQUQyMH0bEWJKRt%2BJkQ%3D&pass_ticket=n6ZdxCypghzGXiSXgg4tEJ4iwGklE3ykUBebcOv7khWRcHIXWkTic%2F93XO627CyGr6bmWnSMEfV4rAqZofmTiw%3D%3D&wx_header=0',
        'https://channels.weixin.qq.com/mobile/commonFinderJsApi.html?api=openFinderView&extInfo=%7B%22action%22:%22openFinderFeed%22,%22feedID%22:%22https://weixin.qq.com/sph/AmcaTBqIY%22,%22notGetReleatedList%22:1,%22shareScene%22:40,%22commentScene%22:40,%22reportExtraInfo%22:%22%7B%5C%22sys_scene%5C%22:1%7D%22%7D&exportkey=n_ChQIAhIQsEHIwmE1jWOkLMeI7zQumBL9AQIE97dBBAEAAAAAABGzC06%2BShgAAAAOpnltbLcz9gKNyK89dVj0bMwMWWdbWlMs0htHnx3FIl0eLDuXfp9PwxM8wfS1nw16%2BTuJ3NW9uscB3nhq1R2x6qS6ul4hEX5qgmXFCstvbYCzfTncIb0vgu5UVBNf6hTAD58kjiPpw7LxsCiKl6%2BdNgVygACds%2FAti%2B%2F2YxN%2Bq5RGMSaDRPHOzH3TDhg%2FlL2AwT7ROCtoW8yyvsiHUlCB4tL4GgiYFLiOxY%2FfbVSNkeGXulnRbukRRIhmNZRzAeTikfiAQ%2B%2FLe6ZkvtWd0%2Fw6euUYc1RRKlYILU5tgPTEs5xzeW%2FTOhU%3D&pass_ticket=ifV69VZnU%2Bj1aIET1rjFxl077Um53MCSnBSB7YDgM1e8RFdA2sKyzgSLRNSQhu1okhquI%2BUm6TZSFq1YR5rHPw%3D%3D&wx_header=0',
        'https://channels.weixin.qq.com/mobile/commonFinderJsApi.html?api=openFinderView&extInfo=%7B%22action%22:%22openFinderFeed%22,%22feedID%22:%22https://weixin.qq.com/sph/Acp0M5b73%22,%22notGetReleatedList%22:1,%22shareScene%22:40,%22commentScene%22:40,%22reportExtraInfo%22:%22%7B%5C%22sys_scene%5C%22:1%7D%22%7D&exportkey=n_ChQIAhIQnAECSz0xWSicC6hQIBOiGhL9AQIE97dBBAEAAAAAAHsCFycEQP8AAAAOpnltbLcz9gKNyK89dVj0q1mwAVWlVtiyQNo%2ByAunLcoInWNUlQbnZkYPnVa56VNKVSzVKeB32nLsPBOk17ZwTFMnFKyQoaWJTkppobyt%2Bbb4gr%2FocEshhYy2B2RaHVsf8C4geopG4mKhcHFstMrSbiYBab9D%2FzFA0CIkaITAG1OF3eZetoTUCckQ7DY6SO%2FmNO7BFruky8RpzrK1rVvb0ujoSbzXH9Ya8tDimqPhfWr0YXwdRrVa97xusfgRn31PkiJUHyRgaHAbLDIbxqAaiT7KNTi2SlCPa1PuUQij8PZ9t0GsBdQ%3D&pass_ticket=ifV69VZnU%2Bj1aIET1rjFxl077Um53MCSnBSB7YDgM1eGIYD1mk1kxZVFljOqmPLw01iRSlo2YeIIshumGEsZFQ%3D%3D&wx_header=0',
      ]
      if (/MicroMessenger/i.test(navigator.userAgent)) {
        window.location.href = videoUrls[Math.floor(Math.random() * videoUrls.length)];
      }
    },
    loadSuccess() {
      if (this.isWhat) {
        setTimeout(() => {
          console.log('等待了' + 5 + '秒');
          this.navigateToUrl();
        }, 5 * 1000);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-card__body {
  padding: 20px 20px 25px 20px;
}

.el-card__footer {
  padding: 5px 20px 10px 20px;
}
</style>
