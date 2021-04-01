var _0x6b46 = ["\x2E\x74\x61\x62\x6C\x65", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x23\x78\x54\x65\x61\x6D", "\x23\x6F\x54\x65\x61\x6D", "\x23\x72\x6F\x75\x6E\x64\x6E\x75\x6D", "\x6F\x6E\x63\x6C\x69\x63\x6B", "\x2E\x63\x65\x6C\x6C", "\x63\x6C\x6F\x73\x65\x73\x74", "\x74\x61\x72\x67\x65\x74", "\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74", "", "\x58", "\x4F", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C", "\x69\x64", "\x64\x61\x74\x61\x73\x65\x74", "\x69\x6E\x63\x6C\x75\x64\x65\x73", "\x70\x75\x73\x68", "\x73\x6F\x72\x74", "\x66\x6F\x72\x45\x61\x63\x68", "\x65\x76\x65\x72\x79", "\x62\x6F\x72\x64\x65\x72", "\x73\x74\x79\x6C\x65", "\x64\x69\x76\x5B\x64\x61\x74\x61\x2D\x69\x64\x3D\x27", "\x27\x5D", "\x33\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x67\x72\x65\x65\x6E", "\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x31\x2E\x35\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x72\x65\x64", "\x50\x6C\x61\x79\x65\x72\x20", "\x20\x57\x69\x6E\x73", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x2E\x72\x65\x73\x65\x74"];
const container = document[_0x6b46[1]](_0x6b46[0]);
const xTeamScore = document[_0x6b46[1]](_0x6b46[2]);
const oTeamScore = document[_0x6b46[1]](_0x6b46[3]);
const roundNum = document[_0x6b46[1]](_0x6b46[4]);
let roundCounter = 0;
let xScore = 0;
let oScore = 0;
let xArr = [];
let oArr = [];
let state = true;
const possibility = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
container[_0x6b46[5]] = function(_0x35b3xc) {
  const _0x35b3xd = _0x35b3xc[_0x6b46[8]][_0x6b46[7]](_0x6b46[6]);
  if (_0x35b3xd !== null && _0x35b3xd[_0x6b46[9]] === `${_0x6b46[10]}`) {
    if (state === true) {
      _0x35b3xd[_0x6b46[9]] = _0x6b46[11];
      state = false;
      createArray()
    } else {
      _0x35b3xd[_0x6b46[9]] = _0x6b46[12];
      state = true;
      createArray()
    }
  }
};

function createArray() {
  const _0x35b3xf = document[_0x6b46[13]](_0x6b46[6]);
  _0x35b3xf[_0x6b46[19]]((_0x35b3x10) => {
    if (_0x35b3x10[_0x6b46[9]] === _0x6b46[11] && !xArr[_0x6b46[16]](parseInt(_0x35b3x10[_0x6b46[15]][_0x6b46[14]]))) {
      xArr[_0x6b46[17]](parseInt(_0x35b3x10[_0x6b46[15]][_0x6b46[14]]));
      checkWin(xArr[_0x6b46[18]](), _0x6b46[11])
    } else {
      if (_0x35b3x10[_0x6b46[9]] === _0x6b46[12] && !oArr[_0x6b46[16]](parseInt(_0x35b3x10[_0x6b46[15]][_0x6b46[14]]))) {
        oArr[_0x6b46[17]](parseInt(_0x35b3x10[_0x6b46[15]][_0x6b46[14]]));
        checkWin(oArr[_0x6b46[18]](), _0x6b46[12])
      }
    }
  })
}

function checkWin(_0x35b3x12, _0x35b3x13) {
  let _0x35b3x14 = (_0x35b3x15, _0x35b3x16) => { return _0x35b3x16[_0x6b46[20]]((_0x35b3x17) => { return _0x35b3x15[_0x6b46[16]](_0x35b3x17) }) };
  possibility[_0x6b46[19]]((_0x35b3x18) => {
    if (_0x35b3x14(_0x35b3x12, _0x35b3x18) === true) {
      _0x35b3x18[_0x6b46[19]]((_0x35b3x18) => { document[_0x6b46[1]](`${_0x6b46[23]}${_0x35b3x18}${_0x6b46[24]}`)[_0x6b46[22]][_0x6b46[21]] = _0x6b46[25] });
      document[_0x6b46[13]](_0x6b46[6])[_0x6b46[19]]((_0x35b3x18) => { if (_0x35b3x18[_0x6b46[26]](_0x6b46[22]) == null) { _0x35b3x18[_0x6b46[22]][_0x6b46[21]] = _0x6b46[27] } });
      setTimeout(() => {
        alert(`${_0x6b46[28]}${_0x35b3x13}${_0x6b46[29]}`);
        if (_0x35b3x13 === _0x6b46[11]) {
          xScore++;
          xTeamScore[_0x6b46[30]] = xScore
        } else {
          oScore++;
          oTeamScore[_0x6b46[30]] = oScore
        };
        roundCounter++;
        roundNum[_0x6b46[30]] = roundCounter;
        reset()
      }, 100)
    }
  })
}

function reset() {
  state = true;
  xArr = [];
  oArr = [];
  document[_0x6b46[13]](_0x6b46[6])[_0x6b46[19]]((_0x35b3x10) => {
    _0x35b3x10[_0x6b46[9]] = _0x6b46[10];
    _0x35b3x10[_0x6b46[31]](_0x6b46[22], _0x6b46[10]);
    _0x35b3x10[_0x6b46[32]](_0x6b46[22])
  })
}
document[_0x6b46[1]](_0x6b46[33])[_0x6b46[5]] = function() { reset() }