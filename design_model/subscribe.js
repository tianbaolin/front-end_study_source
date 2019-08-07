// 订阅中心
const subscribeCenter = {
  // 订阅事件队列
  subscribeNotifies: {},
  // 订阅
  subscribe(eventType, listener) {
    const notifies = this.subscribeNotifies[eventType];
    if (notifies) {
      notifies.push(listener);
    } else {
      this.subscribeNotifies[eventType] = [listener];
    }
  },
  // 发布
  publish(eventType, event) {
    const notifies = this.subscribeNotifies[eventType];
    if (notifies.length > 0) {
      notifies.map(item => item(event));
    } else {
      console.log(eventType, '未订阅');
    }
  },
  remove(eventType, listener) {
    const notifies = this.subscribeNotifies[eventType];
    console.log('notifies', notifies);
    if (notifies) {
      this.subscribeNotifies[eventType] = notifies.filter(item => item !== listener);
    }
  },
};
// 订阅者
const subscriber = {
  listener(event) {
    console.log('event', event);
  },
  subscribe(eventType) {
    subscribeCenter.subscribe(eventType, this.listener);
  },
  remove(eventType) {
    subscribeCenter.remove(eventType, this.listener);
  },
};

subscriber.subscribe('event');
subscribeCenter.publish('event', { eventType: 'event' });
subscribeCenter.publish('event', { eventType: 'event' });
subscriber.remove('event');
subscribeCenter.publish('event', { eventType: 'event' });
