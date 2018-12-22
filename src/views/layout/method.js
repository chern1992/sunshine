const getParentMenusByName = (openAccesseMenu, name) => {
  let temp = [];
  let forFn = function (openAccesseMenu, name) {
      for (var item of openAccesseMenu) {
          if (item.name === name && item.path !== "/") {
              temp.push(item);
              forFn(openAccesseMenu, item.parentName);
          }
      }
  };
  forFn(openAccesseMenu, name);
  temp.reverse()
  return temp;
};

export {
  getParentMenusByName
}

