const countCellColumn = ScriptProperties.getProperty("countCellColumn");

const getCountCell = () => {
  const sheet = SpreadsheetApp.getActiveSheet();
  const cell = sheet.getActiveCell();
  const rowIndex = cell.getRowIndex();
  const countCell = sheet.getRange(countCellColumn + rowIndex);
  if (countCell.isBlank()) countCell.setValue(0);
  return countCell;
};

const increment = () => {
  const countCell = getCountCell();
  const oldValue = countCell.getValue();
  countCell.setValue(oldValue + 1);
};

const decrement = () => {
  const countCell = getCountCell();
  const oldValue = countCell.getValue();
  if (oldValue - 1 < 0) {
    countCell.setValue(0);
    return;
  }
  countCell.setValue(oldValue - 1);
};

const reset = () => {
  getCountCell().setValue(0);
};
