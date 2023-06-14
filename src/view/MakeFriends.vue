<template>
  <div id="make-friends">
    <div style="">
      <img src="../assets/love.png" alt="" style="width: 100%; height: 80%" />
    </div>
    <div class="banxing">
      <div class="content">
        <div class="text">
          loveinginweb is a global dating and dating website. It has
          successfully matched nearly 3 million families on you only need to
          register to enjoy your romantic love time.after completing this form,
          we will match the girl you need to contact you.
        </div>
        <div class="from">
          <el-form
            status-icon
            ref="formData"
            class="demo-ruleForm"
            :model="formData"
            :rules="rules"
          >
            <el-form-item style="margin-top: 15px" prop="name">
              <div class="payment-method">
                <div class="titles" style="margin-bottom: -4px">
                  Name<span style="color: #f57754">*</span>
                </div>
                <el-input
                  v-model="formData.name"
                  placeholder="Please enter your name"
                ></el-input>
              </div>
            </el-form-item>
            <el-frorm-item prop="selected">
              <div class="select">
                Gender<span style="color: #f57754">*</span>
              </div>
              <div class="selected">
                <div
                  class="img"
                  @click="formData.selected = 'a'"
                  :style="{
                    borderRadius: '8px',
                  }"
                >
                  <div
                    v-if="formData.selected !== 'a'"
                    class="imgs"
                    :style="{ border: error ? '1px solid #F56C6C' : '' }"
                  >
                    <div class="content">
                      <img src="@/assets/5.png" alt="" class="left" />
                      <div class="texts">male</div>
                      <img
                        src="@/assets/4.png"
                        alt=""
                        class="right"
                        style="margin-left: 45px"
                      />
                    </div>
                  </div>
                  <div
                    v-if="formData.selected == 'a'"
                    class="imgs"
                    style="background-color: #c584b5"
                  >
                    <div class="content" style="background-color: #c584b5">
                      <img src="@/assets/6.png" alt="" class="left" />
                      <div class="texts" style="color: #ffffff">male</div>
                      <img
                        src="@/assets/2.png"
                        alt=""
                        class="right"
                        style="margin-left: 45px"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="img"
                  :style="{
                    marginLeft: '10%',

                    borderRadius: '8px',
                  }"
                  @click="formData.selected = 'b'"
                >
                  <!-- <img
                      src="@/assets/no-select-girle.png"
                      alt=""
                      v-if="formData.selected !== 'b'"
                    />
  
                  <img
                    src="@/assets/select-girle.png"
                    alt=""
                    v-if="formData.selected == 'b'"
                  /> -->

                  <div
                    v-if="formData.selected !== 'b'"
                    class="imgs"
                    :style="{ border: error ? '1px solid #F56C6C' : '' }"
                  >
                    <div class="content">
                      <img src="@/assets/5.png" alt="" class="left" />
                      <div class="texts">female</div>
                      <img src="@/assets/3.png" alt="" class="right" />
                    </div>
                  </div>
                  <div
                    v-if="formData.selected == 'b'"
                    class="imgs"
                    style="background-color: #c584b5"
                  >
                    <div class="content" style="background-color: #c584b5">
                      <img src="@/assets/6.png" alt="" class="left" />
                      <div class="texts" style="color: #ffffff">female</div>
                      <img src="@/assets/1.png" alt="" class="right" />
                    </div>
                  </div>
                </div>
              </div>
            </el-frorm-item>
            <div v-if="error" style="color: #f57754; font-size: 12px">
              Please select
            </div>
            <el-form-item style="margin-top: 15px" prop="age" class="my-select">
              <div class="payment-method">
                <div class="titles" style="margin-bottom: -4px">
                  Age<span style="color: #f57754">*</span>
                </div>
                <el-select
                  v-model="formData.age"
                  placeholder="Please select your age"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item style="margin-top: 15px" prop="country">
              <div class="payment-method">
                <div class="titles" style="margin-bottom: -4px">
                  Country<span style="color: #f57754">*</span>
                </div>
                <el-select
                  v-model="formData.country"
                  placeholder="Please select your country"
                  filterable
                  allow-create="true"
                >
                  <el-option
                    v-for="item in country"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item style="margin-top: 15px" prop="whatsApp">
              <div class="payment-method">
                <div class="titles" style="margin-bottom: -4px">
                  WhatsApp<span style="color: #f57754">*</span>
                </div>
                <el-input
                  v-model="formData.whatsApp"
                  placeholder="Please enter your whatsapp   "
                ></el-input>
                <div class="tishi">
                  Please fill in your correct WS number here, Please add country
                  code before WS
                </div>
              </div>
            </el-form-item>
            <el-form-item style="margin-top: 15px" prop="text1">
              <div class="payment-method">
                <div class="titles">
                  Love declaration<span style="color: #f57754">*</span>
                </div>
                <el-input
                  type="textarea"
                  v-model="formData.text1"
                  placeholder="Please enter your love declaration"
                  style="margin-top: 0"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item style="margin-top: 15px" prop="text2">
              <div class="payment-method">
                <div class="titles" style="margin-bottom: -4px">
                  Mate selection criteria<span style="color: #f57754">*</span>
                </div>
                <el-input
                  type="textarea"
                  v-model="formData.text2"
                  placeholder="Please enter your mate selection criteria"
                  style="margin-top: 0"
                ></el-input>
              </div>
            </el-form-item>
            <div class="bottom" style="margin-top: -5px">
              Clear form content
            </div>
            <div class="button" @click="handleSumble">Submit</div>
            <div style="height: 70px"></div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { form } from "@/utils/api";
export default {
  name: "MakeFriends",
  data() {
    const validate = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Please enter"));
      } else {
        callback();
      }
    };

    return {
      gender: "",
      formData: {
        name: "",
        text1: "",
        text2: "",
        age: "",
        selected: "",
        country: "",
        whatsApp: "",
      },
      error: false,
      rules: {
        name: [{ validator: validate, trigger: "change" }],
        text1: [{ validator: validate, trigger: "change" }],
        text2: [{ validator: validate, trigger: "change" }],
        age: [{ validator: validate, trigger: "change" }],
        selected: [{ validator: validate, message: "Please select" }],
        country: [
          { validator: validate, trigger: "change", message: "Please select" },
        ],
        whatsApp: [
          { validator: validate, trigger: "change", message: "Please select" },
        ],
      },
      options: [
        { value: "18", label: "18岁" },
        { value: "19", label: "19岁" },
        { value: "20", label: "20岁" },
        { value: "21", label: "21岁" },
        { value: "22", label: "22岁" },
        { value: "23", label: "23岁" },
        { value: "24", label: "24岁" },
        { value: "25", label: "25岁" },
        { value: "26", label: "26岁" },
        { value: "27", label: "27岁" },
        { value: "28", label: "28岁" },
        { value: "29", label: "29岁" },
        { value: "30", label: "30岁" },
        { value: "31", label: "31岁" },
        { value: "32", label: "32岁" },
        { value: "33", label: "33岁" },
        { value: "34", label: "34岁" },
        { value: "35", label: "35岁" },
        { value: "36", label: "36岁" },
        { value: "37", label: "37岁" },
        { value: "38", label: "38岁" },
        { value: "39", label: "39岁" },
        { value: "40", label: "40岁" },
        { value: "41", label: "41岁" },
        { value: "42", label: "42岁" },
        { value: "43", label: "43岁" },
        { value: "44", label: "44岁" },
        { value: "45", label: "45岁" },
        { value: "46", label: "46岁" },
        { value: "47", label: "47岁" },
        { value: "48", label: "48岁" },
        { value: "49", label: "49岁" },
        { value: "50", label: "50岁" },
        { value: "51", label: "51岁" },
        { value: "52", label: "52岁" },
        { value: "53", label: "53岁" },
        { value: "54", label: "54岁" },
        { value: "55", label: "55岁" },
        { value: "56", label: "56岁" },
        { value: "57", label: "57岁" },
        { value: "58", label: "58岁" },
        { value: "59", label: "59岁" },
        { value: "60", label: "60岁" },
        { value: "61", label: "61岁" },
        { value: "62", label: "62岁" },
        { value: "63", label: "63岁" },
        { value: "64", label: "64岁" },
        { value: "65", label: "65岁" },
        { value: "66", label: "66岁" },
        { value: "67", label: "67岁" },
        { value: "68", label: "68岁" },
        { value: "69", label: "69岁" },
        { value: "70", label: "70岁" },

        { value: "71", label: "71岁" },
        { value: "72", label: "72岁" },
        { value: "73", label: "73岁" },
        { value: "74", label: "74岁" },
        { value: "75", label: "75岁" },
        { value: "76", label: "76岁" },
        { value: "77", label: "77岁" },
        { value: "78", label: "78岁" },
        { value: "79", label: "79岁" },
        { value: "80", label: "80岁" },
      ],
      country: [
        { value: "Angola", label: "安哥拉" },
        { value: "Afghanistan", label: "阿富汗" },
        { value: "Albania", label: "阿尔巴尼亚" },
        { value: "Algeria", label: "阿尔及利亚" },
        { value: "Andorra", label: "安道尔共和国" },
        { value: "Anguilla", label: "安圭拉岛" },
        { value: "Antigua and Barbuda", label: "安提瓜和巴布达" },
        { value: "Argentina", label: "阿根廷" },
        { value: "Armenia", label: "亚美尼亚" },
        { value: "Ascension", label: "阿森松" },
        { value: "Australia", label: "澳大利亚" },
        { value: "Austria", label: "奥地利" },
        { value: "Azerbaijan", label: "阿塞拜疆" },
        { value: "Bahamas", label: "巴哈马" },
        { value: "Bahrain", label: "巴林" },
        { value: "Bangladesh", label: "孟加拉国" },
        { value: "Barbados", label: "巴巴多斯" },
        { value: "Belarus", label: "白俄罗斯" },
        { value: "Belgium", label: "比利时" },
        { value: "Belize", label: "伯利兹" },
        { value: "Benin", label: "贝宁" },
        { value: "Bermuda Is", label: "百慕大群岛" },
        { value: "Bolivia", label: "玻利维亚" },
        { value: "Botswana", label: "博茨瓦纳" },
        { value: "Brazil", label: "巴西" },
        { value: "Brunei", label: "文莱" },
        { value: "Bulgaria", label: "保加利亚" },
        { value: "Burkina Faso", label: "布基纳法索" },
        { value: "Burma", label: "缅甸" },
        { value: "Burundi", label: "布隆迪" },
        { value: "Cameroon", label: "喀麦隆" },
        { value: "Canada", label: "加拿大" },
        { value: "Cayman Is", label: "开曼群岛" },
        { value: "Central African Republic", label: "中非共和国" },
        { value: "Chad", label: "乍得" },
        { value: "Chile", label: "智利" },
        { value: "China", label: "中国" },
        { value: "Colombia", label: "哥伦比亚" },
        { value: "Congo", label: "刚果" },
        { value: "Cook Is", label: "库克群岛" },
        { value: "Costa Rica", label: "哥斯达黎加" },
        { value: "Cuba", label: "古巴" },
        { value: "Cyprus", label: "塞浦路斯" },
        { value: "Czech Republic", label: "捷克" },
        { value: "Denmark", label: "丹麦" },
        { value: "Djibouti", label: "吉布提" },
        { value: "Dominica Rep", label: "多米尼加共和国" },
        { value: "Ecuador", label: "厄瓜多尔" },
        { value: "Egypt", label: "埃及" },
        { value: "EI Salvador", label: "萨尔瓦多" },
        { value: "Estonia", label: "爱沙尼亚" },
        { value: "Ethiopia", label: "埃塞俄比亚" },
        { value: "Fiji", label: "斐济" },
        { value: "Finland", label: "芬兰" },
        { value: "France", label: "法国" },
        { value: "French Guiana", label: "法属圭亚那" },
        { value: "French Polynesia", label: "法属玻利尼西亚" },
        { value: "Gabon", label: "加蓬" },
        { value: "Gambia", label: "冈比亚" },
        { value: "Georgia", label: "格鲁吉亚" },
        { value: "Germany", label: "德国" },
        { value: "Ghana", label: "加纳" },
        { value: "Gibraltar", label: "直布罗陀" },
        { value: "Greece", label: "希腊" },
        { value: "Grenada", label: "格林纳达" },
        { value: "Guam", label: "关岛" },
        { value: "Guatemala", label: "危地马拉" },
        { value: "Guinea", label: "几内亚" },
        { value: "Guyana", label: "圭亚那" },
        { value: "Haiti", label: "海地" },
        { value: "Honduras", label: "洪都拉斯" },
        { value: "Hungary", label: "匈牙利" },
        { value: "Iceland", label: "冰岛" },
        { value: "India", label: "印度" },
        { value: "Indonesia", label: "印度尼西亚" },
        { value: "Iran", label: "伊朗" },
        { value: "Iraq", label: "伊拉克" },
        { value: "Ireland", label: "爱尔兰" },
        { value: "Israel", label: "以色列" },
        { value: "Italy", label: "意大利" },
        { value: "Ivory Coast", label: "科特迪瓦" },
        { value: "Jamaica", label: "牙买加" },
        { value: "Japan", label: "日本" },
        { value: "Jordan", label: "约旦" },
        { value: "Kampuchea (Cambodia )", label: "柬埔寨" },
        { value: "Kazakstan", label: "哈萨克斯坦" },
        { value: "Kenya", label: "肯尼亚" },
        { value: "Korea", label: "韩国" },
        { value: "Kuwait", label: "科威特" },
        { value: "Kyrgyzstan", label: "吉尔吉斯坦" },
        { value: "Laos", label: "老挝" },
        { value: "Latvia", label: "拉脱维亚" },
        { value: "Lebanon", label: "黎巴嫩" },
        { value: "Lesotho", label: "莱索托" },
        { value: "Liberia", label: "利比里亚" },
        { value: "Libya", label: "利比亚" },
        { value: "Liechtenstein", label: "列支敦士登" },
        { value: "Lithuania", label: "立陶宛" },
        { value: "Luxembourg", label: "卢森堡" },
        { value: "Madagascar", label: "马达加斯加" },
        { value: "Malawi", label: "马拉维" },
        { value: "Malaysia", label: "马来西亚" },
        { value: "Maldives", label: "马尔代夫" },
        { value: "Mali", label: "马里" },
        { value: "Malta", label: "马耳他" },
        { value: "Mariana Is", label: "马里亚那群岛" },
        { value: "Martinique", label: "马提尼克" },
        { value: "Mauritius", label: "毛里求斯" },
        { value: "Mexico", label: "墨西哥" },
        { value: "Moldova", label: "摩尔多瓦" },
        { value: "Monaco", label: "摩纳哥" },
        { value: "Mongolia", label: "蒙古" },
        { value: "Montserrat Is", label: "蒙特塞拉特岛" },
        { value: "Morocco", label: "摩洛哥" },
        { value: "Mozambique", label: "莫桑比克" },
        { value: "Namibia", label: "纳米比亚" },
        { value: "Nauru", label: "瑙鲁" },
        { value: "Nepal", label: "尼泊尔" },
        { value: "Netheriands Antilles", label: "荷属安的列斯" },
        { value: "Netherlands", label: "荷兰" },
        { value: "New Zealand", label: "新西兰" },
        { value: "Nicaragua", label: "尼加拉瓜" },
        { value: "Niger", label: "尼日尔" },
        { value: "Nigeria", label: "尼日利亚" },
        { value: "North Korea", label: "朝鲜" },
        { value: "Norway", label: "挪威" },
        { value: "Oman", label: "阿曼" },
        { value: "Pakistan", label: "巴基斯坦" },
        { value: "Panama", label: "巴拿马" },
        { value: "Papua New Cuinea", label: "巴布亚新几内亚" },
        { value: "Paraguay", label: "巴拉圭" },
        { value: "Peru", label: "秘鲁" },
        { value: "Philippines", label: "菲律宾" },
        { value: "Poland", label: "波兰" },
        { value: "Portugal", label: "葡萄牙" },
        { value: "Puerto Rico", label: "波多黎各" },
        { value: "Qatar", label: "卡塔尔" },
        { value: "Reunion", label: "留尼旺" },
        { value: "Romania", label: "罗马尼亚" },
        { value: "Russia", label: "俄罗斯" },
        { value: "Saint Lueia", label: "圣卢西亚" },
        { value: "Saint Vincent", label: "圣文森特岛" },
        { value: "Samoa Eastern", label: "东萨摩亚(美)" },
        { value: "Samoa Western", label: "西萨摩亚" },
        { value: "San Marino", label: "圣马力诺" },
        { value: "Sao Tome and Principe", label: "圣多美和普林西比" },
        { value: "Saudi Arabia", label: "沙特阿拉伯" },
        { value: "Senegal", label: "塞内加尔" },
        { value: "Seychelles", label: "塞舌尔" },
        { value: "Sierra Leone", label: "塞拉利昂" },
        { value: "Singapore", label: "新加坡" },
        { value: "Slovakia", label: "斯洛伐克" },
        { value: "Slovenia", label: "斯洛文尼亚" },
        { value: "Solomon Is", label: "所罗门群岛" },
        { value: "Somali", label: "索马里" },
        { value: "South Africa", label: "南非" },
        { value: "Spain", label: "西班牙" },
        { value: "SriLanka", label: "斯里兰卡" },
        { value: "St.Lucia", label: "圣卢西亚" },
        { value: "St.Vincent", label: "圣文森特" },
        { value: "Sudan", label: "苏丹" },
        { value: "Suriname", label: "苏里南" },
        { value: "Swaziland", label: "斯威士兰" },
        { value: "Sweden", label: "瑞典" },
        { value: "Switzerland", label: "瑞士" },
        { value: "Syria", label: "叙利亚" },
        { value: "Tajikstan", label: "塔吉克斯坦" },
        { value: "Tanzania", label: "坦桑尼亚" },
        { value: "Thailand", label: "泰国" },
        { value: "Togo", label: "多哥" },
        { value: "Tonga", label: "汤加" },
        { value: "Trinidad and Tobago", label: "特立尼达和多巴哥" },
        { value: "Tunisia", label: "突尼斯" },
        { value: "Turkey", label: "土耳其" },
        { value: "Turkmenistan", label: "土库曼斯坦" },
        { value: "Uganda", label: "乌干达" },
        { value: "Ukraine", label: "乌克兰" },
        { value: "United Arab Emirates", label: "阿拉伯联合酋长国" },
        { value: "United Kiongdom", label: "英国" },
        { value: "United States of America", label: "美国" },
        { value: "Uruguay", label: "乌拉圭" },
        { value: "Uzbekistan", label: "乌兹别克斯坦" },
        { value: "Venezuela", label: "委内瑞拉" },
        { value: "Vietnam", label: "越南" },
        { value: "Yemen", label: "也门" },
        { value: "Yugoslavia", label: "南斯拉夫" },
        { value: "Zimbabwe", label: "津巴布韦" },
        { value: "Zaire", label: "扎伊尔" },
        { value: "Zambia", label: "赞比亚" },
      ],
      value: "",
    };
  },
  watch: {
    "formData.selected"() {
      if (this.formData.selected == "a") {
        this.gender = "male";
      } else if (this.formData.selected == "b") {
        this.gender = "female";
      }
    },
  },
  mounted() {},
  updated() {
    const select = document.querySelectorAll(".el-select-dropdown__item");

    select.style.background = "red";
  },
  methods: {
    handleSumble() {
      this.$refs.formData.validate((valid) => {
        const data = {
          name: this.formData.name,
          sex: this.gender,
          country: this.formData.country,
          selection: this.formData.text2,
          whats_app: this.formData.whatsApp,
          declaration: this.formData.text1,
          age: this.formData.age,
        };
        if (valid) {
          form({ ...data }).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              window.location.href = "https://www.baidu.com";
            } else {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
            }
          });
        } else {
          if (this.formData.selected == "") {
            this.error = true;
          } else {
            this.error = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="less">
#make-friends {
  position: relative;

  overflow: auto;
  background: #2f2d47;

  .banxing {
    box-sizing: border-box;
    padding: 0 30px;
    background: #2f2d47;
    height: 100vh;

    .content {
      background: #2f2d47;

      width: 100%;
      .text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        /* or 18px */

        display: flex;
        align-items: flex-end;
        text-align: justify;

        color: rgba(255, 255, 255, 0.8);
        margin-top: 8px;
      }
      .from {
        margin-top: 16px;
        width: 100%;
        background: #2f2d47;
        .demo-ruleForm {
          width: 100%;
          .el-form-item__error {
            color: #f57754;
          }
          .bottom {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            text-align: right;

            color: #ffffff;
          }
          .button {
            width: 214px;
            height: 47px;

            background: linear-gradient(
              94.74deg,
              #6891c5 1.17%,
              #ce82b3 97.52%
            );
            box-shadow: 0px 4px 0px #6e5ba5;
            border-radius: 8px;
            margin-left: 50px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 47px;
            text-align: center;
            margin-top: 24px;
            color: #ffffff;
          }
          .select {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;

            color: #ffffff;
          }
          .selected {
            margin-top: 4px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .img {
              width: 50%;
              .imgs {
                width: 100%;
                height: 46px;
                display: flex;
                background: #fbfafc;

                border-radius: 6px;
                .content {
                  height: 100%;
                  display: flex;
                  border-radius: 6px;
                  background: #fbfafc;

                  .left {
                    width: 13px;
                    height: 13px;
                    margin-left: 12px;
                    margin-top: 18px;
                  }
                  .texts {
                    margin-left: 8px;

                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    margin-top: 16px;
                    color: #2f2d47;
                  }
                  .right {
                    height: 20px;
                    width: 20px;
                    margin-left: 30px;
                    margin-top: 14px;
                  }
                }
              }
            }
          }
          .el-form-item__content {
            width: 100%;

            .payment-method {
              .titles {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;

                color: #ffffff;
              }
              .tishi {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;

                color: #9a99af;
              }
              .el-input {
                margin-top: 12px;
                background: #fbfafc;
                border: 1px solid #979797;
                border-radius: 8px;
                height: 46px;
                margin-top: 0;
                .el-input__suffix {
                  display: none;
                }
                .el-input__inner {
                  height: 46px;
                }
                ::v-deep .is-error {
                  border: 1px solid blue !important;
                }
              }

              .el-select {
                width: 100%;
                ::v-deep
                  .el-select-dropdown
                  .el-select-dropdown__item.selected {
                  color: #ff0000; /* 设置选中选项的字体颜色 */
                }
                /* 修改多选模式下选中选项的背景颜色 */
              }

              .el-textarea {
                height: 138px;
                margin-top: 10px;
                .el-textarea__inner {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
