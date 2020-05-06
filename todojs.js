class Todojs {
  constructor(inputElementId, listElementId){
    this.inputElementId = inputElementId;
    this.listElementId = listElementId;
  }

  init(){
    this.initSubmitHandler();
    this.initRemoveItemHandler();
  }

  initSubmitHandler(){
    $(this.inputElementId).keypress($.proxy(this.submitEvent, this));
  }

  initRemoveItemHandler(){
    $(document).on('click', '.deleteItemButton', $.proxy(this.deleteEvent, this));
  }

  deleteEvent(event){
    $(event.target).parent().remove();
  }

  submitEvent(event) {
    const listElement = $(this.listElementId);
    if (event.which === 13) {
      let value = $(this.inputElementId).val();
      listElement.append(this.itemTemplate(value));
      $(this.inputElementId).val('');
    }
  }

  itemTemplate(value){
    let random = Math.random();
    return `
      <div id="${random}">
        ${value}
        <button class="deleteItemButton">delete</button>
      </div>
    `;
  }
}

