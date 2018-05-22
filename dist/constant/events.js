// @see datatables.net/reference/event/
export var EVENTS;

(function (EVENTS) {
  EVENTS["PROCESSING"] = "processing.dt";
  EVENTS["PAGING"] = "page.dt";
  EVENTS["DESTROY"] = "destroy.dt";
  EVENTS["SELECT"] = "select.dt";
  EVENTS["DESELECT"] = "deselect.dt";
  EVENTS["ORDERING"] = "order.dt";
  EVENTS["SEARCHING"] = "search.dt";
  EVENTS["COLUMN_VISIBILITY"] = "column-visibility.dt";
})(EVENTS || (EVENTS = {}));

;