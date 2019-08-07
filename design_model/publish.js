// 订阅中心
const subscribeCenter = {
  events: {},
  subscribe: function subscribe(event, listener) {
    const typeEvent = this.events[event];
    if (typeEvent) {
      typeEvent.push(listener);
    } else {
      this.events[event] = [listener];
    }
  },
  publish: function publish(eventType, eventObj) {
    const events = this.events[eventType];
    if (events && events.length) {
      events.map(item => item(eventObj));
    }
  },
};
// 订阅者
const subscriber = {
  listener: function listener(event) {
    console.log('object', event);
  },
};
// 发布者
const publisher = {
  publish(eventType, event) {
    subscribeCenter.publish(eventType, event);
  },
};
subscribeCenter.subscribe('event', subscriber.listener);
subscribeCenter.subscribe('event', subscriber.listener);
publisher.publish('event', { a: 2 });
