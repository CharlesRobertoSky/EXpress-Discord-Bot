class Logger {
  static log(message:string) {
      console.log(`[LOG] ${message}`);
  }

  static info(message:string) {
      console.log(`[INFO] ${message}`);
  }

  static warn(message:string) {
      console.log(`[WARN] ${message}`);
  }

  static error(message:string) {
      console.log(`[ERROR] ${message}`);
  }

  static debug(message:string) {
      console.log(`[DEBUG] ${message}`);
  }
}

module.exports = {Logger};