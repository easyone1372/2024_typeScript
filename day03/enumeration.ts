enum Direction {
  East,
  West,
  South,
  North,
}

const dir: Direction = Direction.East; //dir은 Direction의 4가지만 사용할 수 있게 된다

enum HttpStatus {
  OK,
  NotFound,
}

enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

const getStatus = (status: Status): string => {
  switch (status) {
    case Status.Pending:
      return "작업대기중";
    case Status.InProgress:
      return "작업진행중";
    case Status.Completed:
      return "작업완료";
    case Status.Failed:
      return "작업실패";
    default:
      return "알 수 없는 상태";
  }
};

const response: HttpStatus = HttpStatus.OK;
// const getHttp: (status:HttpStatus)=>{}
