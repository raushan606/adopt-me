const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "bitch" }),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "fly" }),
    React.createElement(Pet, { name: "Doinnk", animal: "Cat", breed: "mixed" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
