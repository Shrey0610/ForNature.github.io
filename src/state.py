:root {
  --bg-light: white;
  --box-shadow-light: 0px 8px 16px 0px rgba(0, 0, 0, 0.35);
  --padding-light: 1rem;

  --bg-dark: #1f2128;
  --font-family: 'Gill Sans';
  --header-bg-dark: #1f2128;
  --header-bg-light: white;
  --header-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.35);
  --header-padding: 0 1rem 0 1rem 0 1rem 0 4rem 0 10rem;
  --header-transition: all 400ms ease;

  --content-bg: white;
  --workSpace-height: 100vh;
  --navbar-color: white;
}

.app {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light);
}

.header {
  width: 100%;
  height: 7vh;
  box-shadow: var(--header-box-shadow);
  justify-content: center;
  padding: var(--header-padding);
  transition: var(--header-transition);

  &_dark {
    background-color: var(--header-bg-dark);
  }

  &_light {
    background-color: var(--header-bg-light);
  }
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: var(--content-bg);
}

.workSpace {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--workSpace-height);
}

.main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--workSpace-height);
}

.navbar {
  color: var(--navbar-color);
  margin: 2em;
}

.rectangle,
.custom-1,
.custom-2,
.square {
  width: 5em;
  height: 10.5em;
  box-shadow: var(--box-shadow-light);
  transition: all 450ms ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: none;
  }
}

.custom-1 {
  width: 10.5em;
}

.custom-2 {
  width: 10.5em;
  height: 5em;
}

.square {
  height: 5em;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.blink {
  animation: blink 0.9s infinite;
}
