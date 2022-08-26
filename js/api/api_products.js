const d = document,
  $products = d.querySelector('.api-products');

async function loadProducts(productApiMl01, productApiMl02) {
  try {
    let productMl01Fetch = fetch(productApiMl01),
      productMl02Fetch = fetch(productApiMl02),
      [resProductMl01, resProductMl02] = await Promise.all([
        productMl01Fetch,
        productMl02Fetch,
      ]);

    const productMl01 = await resProductMl01.json(),
      productMl02 = await resProductMl02.json();

    let $templateProduct01 = '',
      $templateProduct02 = '';

    if (productMl01) {
      const { body } = productMl01[0];
      const { title, pictures, base_price } = body;

      $templateProduct01 += `
        <article class='card'>
                <img src='${pictures[0].url}' alt='auriculares' />
                <small>$2.499</small>
                <div>
                    <span class='price'><b>$${base_price}</b></span>
                    <span class='discount'>25% OFF</span>
                    <div class='send'>
                    <small>Llega mañana</small>
                    <small>Full</small>
                    </div>
                </div>
                <p>${title}</p>
        </article>
        `;
    }

    if (productMl02) {
      const { title, pictures, base_price } = productMl02;
      $templateProduct02 += `
          <article class='card'>
                  <img src='${pictures[0].url}' alt='vaporera electrica' />
                  <small>$9.299</small>
                  <div>
                      <span class='price'><b>$${base_price}</b></span>
                      <span class='discount'>20% OFF</span>
                  </div>
                  <p>${title}</p>
          </article>
          `;
    }

    /* if (!res.ok) throw { status: res.status, statusText: res.statusText }; */

    $products.innerHTML += $templateProduct01;
    $products.innerHTML += $templateProduct02;
  } catch (err) {
    console.log(err);
    let message = err.statusText || 'Ocurrio un error';
    $templateProduct01 += `
    <article>
      <p>Error ${err.status}: ${message}</p>
      </article>
  `;
  }
}

export default loadProducts;
