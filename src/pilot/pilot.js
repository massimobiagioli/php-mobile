class Pilot {
  constructor() {
    this.nameform = "pilot";
  }

  parseEvent(request) {
    switch (request.event) {
      case "onClick":
        switch (request.id) {
          case "btnShow":
            Out.show(this.nameform + "_divTest");
            break;

          case "btnHide":
            Out.hide(this.nameform + "_divTest");
            break;
        }

        break;
    }
  }

};

export default Pilot;