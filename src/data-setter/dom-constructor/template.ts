const Twig = require('twig');

export const domTemplate = Twig.twig({
    data: `{% if p.tlb or p.tlc or p.tla or p.trb or p.trc or p.tra %}
    <'row'<'col-sm-6'{{ p.tlb }}{{ p.tlc }}{{ p.tla }}>
    <'col-sm-6'{{ p.trb }}{{ p.trc }}{{ p.tra }}>>
{% endif %}
{% if p.tm %}
    <'row'<'col-sm-12'{{ p.tm }}>>
{% endif %}
<'row'<'col-sm-12't{{ p.ccc }}>>
{% if p.bm %}
    <'row'<'col-sm-12'{{ p.bm }}>>
{% endif %}
{% if p.blb or p.blc or p.bla or p.brb or p.brc or p.bra %}
    <'row'<'col-sm-5'{{ p.blb }}{{ p.blc }}{{ p.bla }}>
    <'col-sm-7'{{ p.brb }}{{ p.brc }}{{ p.bra }}>>
{% endif %}`,
}) as any;