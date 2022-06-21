import styled from 'styled-components';

import useToastObserver from '../useToastObserver';

function Toast() {
  const toasts = useToastObserver();

  return (
    <ToastWrapper>
      {toasts.map(toast => <ToastMessageWrapper>{toast.content}</ToastMessageWrapper>)}
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`

const ToastMessageWrapper = styled.div`
  margin-bottom: 10px;
  width: 220px;
  height: 45px;
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  line-height: 45px;
  box-shadow: 0 0 5px 1px #f0f0f0;
  font-size: 14px;
  visibility: visible;
  -webkit-animation: fadein 1s;
  animation: fadein 1s;
  opacity: 0.9;

  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 0.9;}
  }

  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 0.9;}
  }
`

export default Toast;
