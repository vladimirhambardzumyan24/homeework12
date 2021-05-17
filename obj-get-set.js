const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    let item = value.split(", ");
    for (let i = 0; i < item.length; i++) {
      obj._name.push([item[i], item[i].length]);
    }
  },
  get name() {
    return obj._name;
  },
};
obj.name = "Vrezh, Artavazd";
console.log(obj.name);
