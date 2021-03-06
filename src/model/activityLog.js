class ActivityLog {
  constructor(DateProvider) {
    this.logs = [];
    this.DateProvider = DateProvider;
  }

  addLog(log) {
    let timeStamp = new this.DateProvider();
    this.logs.unshift({
      log,
      timeStamp: `${timeStamp.getHours()} : ${timeStamp.getMinutes()}`
    });
  }

  getLogs() {
    return this.logs;
  }
}

module.exports = ActivityLog;
