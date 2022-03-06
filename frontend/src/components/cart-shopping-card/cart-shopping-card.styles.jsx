export const backToShop = {
  marginTop: "4.5rem",
  transform: "translate3d(0, -100%, 0)",
  bottom: "1px",
  position: "absolute"
};

export const card = {
  height: "100%",
}

export const cardFrame = {
  backgroundColor: "#fff",
  padding: "4vh 5vh",
  borderBottomLeftRadius: "1rem",
  borderTopLeftRadius: "1rem",

  "@media (max-width: 767px)": {
    "&": {
      padding: "4vh",
      borderBottomLeftRadius: "unset",
      borderTopRightRadius: "1rem"
    }
  }
}

export const title = {
  fontSize: "1.5rem"
}
