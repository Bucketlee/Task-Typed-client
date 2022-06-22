# Describes the solution

Mission : Typed의 ResourceList를 간단하게 구현하기

## Resource 등록

### `URL 리소스`

- `https://`, `http://` schema를 포함한 URL을 받기 위해 util 함수 `checkValidUrl`을 만들어 유효성을 확인했습니다.
- youtube URL을 embed URL로 변경하기 위해 'youtube.com'을 포함한 URL은 util 함수 `changeYoutubeEmbedUrl`를 거치도록 합니다.
- 고정 된 2개의 리소스(URL type)는 initialResource에 넣어 Redux store에 담았습니다.

### `Image 리소스`

- AddImageResourceButton을 누르면 숨겨진 input이 작동하며, 여러개(multiple)를 받을 수 있고 'image/*' 형식만 받아들이도록 설정했습니다.
- 이미지 별로 validation이 일어나게 하기 위해 input 된 files를 setTimeout으로 random(300ms ~ 1000ms)하게 등록하도록 했습니다.

### `등록 시 Toast`

- Redux store를 통해 Toast가 담긴 배열을 관리했습니다. 새로운 Toast를 만들 때 setTimeout으로 store에서 제거되도록 설정했습니다.
- Toast component에서 store 안에 있는 Toast를 fixed position으로 띄웠습니다. css animation으로 fade in 효과를 줬습니다.



## Resource 삭제 / title 변경

- Redux를 통해 Resource 추가, 삭제, 업데이트를 구현하여 작동하게 했습니다.
- Resource model을 정의할 때 title과 source를 나누어 뒀기 때문에 title을 변경하더라도 source는 변함 없도록 했습니다.


## Resource Viewer 구현

- 선택 된 resource를 React state로 관리하고, 해당 state에 resource가 있을 경우 iframe을 통해 보여지도록 했습니다. 닫기 버튼 클릭 시 state를 비웠습니다.



