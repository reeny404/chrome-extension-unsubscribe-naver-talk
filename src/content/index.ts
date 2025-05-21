async function unsubscribe() {
  try {
    const buttons = Array.from(
      document.getElementsByClassName("btn_alarm type_on")
    );

    console.debug("[알림 해제 프로그램] 대상 :", buttons.length);

    if (!buttons.length) {
      return;
    }

    if (
      !confirm(
        `모든 채널의 알림을 해제하시겠습니까? (채널 갯수: ${buttons.length})`
      )
    ) {
      return;
    }

    for (let i = 0; i < buttons.length; i++) {
      (buttons[i] as HTMLElement).click();

      await new Promise((resolve) => setTimeout(resolve, 300));

      const funcButtons = document.getElementsByClassName("btn_func");
      if (funcButtons.length >= 2) {
        (funcButtons[1] as HTMLElement).click();
        await new Promise((resolve) => setTimeout(resolve, 200));
        (funcButtons[0] as HTMLElement).click();
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// 페이지가 로드되면 자동으로 실행
if (window.location.href === "https://m.notify.naver.com/channel") {
  setTimeout(() => {
    unsubscribe();
  }, 1000);
}
