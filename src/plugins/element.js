import Vue from 'vue';
import { MessageBox, Message,Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Pagination)

// Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

