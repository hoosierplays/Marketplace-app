function reloadPreview() {
  productTitle = document.getElementById("product_title").value;
  productImage = document.getElementById("product_image").value;
  productStoreLink = document.getElementById("product_link").value;
  productStoreName = document.getElementById("product_link_title").value;
  productDescription = document.getElementById("product_description").value;
  productPrice = document.getElementById("product_price").value;

  document.getElementById("product_image_preview").src = productImage;
  document.getElementById("product_title_preview").innerHTML = productTitle;
  document.getElementById("product_description_preview").innerHTML =
    productDescription;
  document.getElementById("product_link_preview").href = productStoreLink;
  document.getElementById(
    "product_link_preview"
  ).innerHTML = `Visit the ${productStoreName} store`;
  document.getElementById("product_price_preview").innerHTML =
    "$" + productPrice;
}

setInterval(reloadPreview, 2000);

function addDetails() {
  productTitle = document.getElementById("product_title").value;
  productImage = document.getElementById("product_image").value;
  productStoreLink = document.getElementById("product_link").value;
  productStoreName = document.getElementById("product_link_title").value;
  productDescription = document.getElementById("product_description").value;
  productPrice = document.getElementById("product_price").value;

  const card = {
    id: 1,
    title: productTitle,
    image: productImage,
    link: productStoreLink,
    name: productStoreName,
    description: productDescription,
  };
}

function goBackToMain() {
  window.location.replace("../buyer_dashboard/buyer.html");
}
