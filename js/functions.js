function createShowSpan(className, textContent) {
  const showSpan = document.createElement("span");
  showSpan.classList.add(className);
  showSpan.textContent = textContent;
  return showSpan;
}

function renderToolbar(...[tools]) {
  const toolbarWrapper = toolbarMarkup();
  const toolbar = toolbarWrapper.querySelector("#toolbar");

  for (let tool of tools) {
    toolbar.appendChild(tool);
  }

  document.body.insertAdjacentElement("beforeend", toolbarWrapper);
}

function toolbarMarkup() {
  const toolbarWrapper = document.createElement("div");
  toolbarWrapper.classList.add("toolbar__wrapper");

  const toolbar = document.createElement("div");
  toolbar.id = "toolbar";
  toolbar.classList.add("toolbar");

  const toolbarToggleButton = document.createElement("button");
  toolbarToggleButton.classList.add("toolbar__toggle");
  toolbarToggleButton.id = "toolbar-toggle";

  toolbarWrapper.appendChild(toolbar);
  toolbarWrapper.appendChild(toolbarToggleButton);

  return toolbarWrapper;
}

function createTool(name, ...elements) {
  const tool = document.createElement("div");
  tool.classList.add("tool-wrapper");

  const toolButton = document.createElement("button");
  toolButton.classList.add("toolbar__button");
  toolButton.id = name + "-tool";

  toolButton.appendChild(createShowSpan("name", name));

  for (let element of elements) {
    toolButton.appendChild(element);
  }
  tool.appendChild(toolButton);
  return tool;
}
