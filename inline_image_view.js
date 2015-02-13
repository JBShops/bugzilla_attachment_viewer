// Iterate through all the attachment rows.
[].forEach.call(document.querySelectorAll("#attachment_table .bz_attach_extra_info"), function(span_element){
  if (span_element.textContent.indexOf("image/") > -1) {
    var td_element = span_element.parentElement;
    if (!td_element || !td_element.nextElementSibling)
        return;

    var tr_element = td_element.parentElement;
    if (!tr_element)
        return;

    var attachment_anchor = td_element.firstElementChild;
    if (!attachment_anchor || attachment_anchor.tagName.toLowerCase() !== 'a')
        return;

    var view_anchor = document.createElement("a");
    view_anchor.href = attachment_anchor.href;
    view_anchor.textContent = "View";

    // Create the custom attributes to work with the lightbox plugin.
    var data_lightbox = document.createAttribute("data-lightbox");
    data_lightbox.value = "images";
    view_anchor.setAttributeNode(data_lightbox);

    var data_title = document.createAttribute("data-title");
    var description_element = td_element.querySelector("a > b");
    data_title.value = description_element ? description_element.textContent : "";
    view_anchor.setAttributeNode(data_title);

    tr_element.querySelector("td:last-child").appendChild(view_anchor);
  }
});
