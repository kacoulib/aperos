
      let Log = function () {
        return (target: any, name: string, descriptor: any) => {
          console.log(`call to ${name}`);
          return descriptor;
        };
      }
      class RaceService {

      @Log()
        getRaces() {
        // call API
      }

      @Log()
        getRace(raceId) {
        // call API
        }
      }

    let r = new RaceService;
    // logs: call to getRaces
    r.getRaces()
    r.getRace(1);
    // logs: call to getRace
    console.log(r)