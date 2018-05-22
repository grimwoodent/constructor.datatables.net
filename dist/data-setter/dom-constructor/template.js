var Twig = require('twig');

export var domTemplate = Twig.twig({
  data: "{% if p.tlb or p.tlc or p.tla or p.trb or p.trc or p.tra %}\n    <'row'<'col-sm-6'{{ p.tlb }}{{ p.tlc }}{{ p.tla }}>\n    <'col-sm-6'{{ p.trb }}{{ p.trc }}{{ p.tra }}>>\n{% endif %}\n{% if p.tm %}\n    <'row'<'col-sm-12'{{ p.tm }}>>\n{% endif %}\n<'row'<'col-sm-12't{{ p.ccc }}>>\n{% if p.bm %}\n    <'row'<'col-sm-12'{{ p.bm }}>>\n{% endif %}\n{% if p.blb or p.blc or p.bla or p.brb or p.brc or p.bra %}\n    <'row'<'col-sm-5'{{ p.blb }}{{ p.blc }}{{ p.bla }}>\n    <'col-sm-7'{{ p.brb }}{{ p.brc }}{{ p.bra }}>>\n{% endif %}"
});