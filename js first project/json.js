function loadData() {
    const ajaxtask = new XMLHttpRequest();
    ajaxtask.open('Get', 'data.json', true);
    ajaxtask.onload = async function () {
        if (this.status === 200) {
            let data1 = JSON.parse(this.responseText)[0].employees;
            let form = "";
            data1.forEach(e => {
                form +=
                `
                <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class"d-flex">
                            <h1>${e.fullname}</h1>
                            <h3>${e.age}</h3>
                            <h6>${e.position}</h6>
                            <p>${e.salary}</p>
                            </div>
                        </div>
                      </div>
                `;
            });
            document.querySelector('#inEmployes').innerHTML = form;


            let products = JSON.parse(this.responseText)[1].products;
            let form2 = "";
            products.forEach(e => {
                form2 +=
                `
                <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class"d-flex">
                            <h1>${e.name}</h1>
                            <h6>${e.averageprice}</h6>
                            <p>${e.liked}</p>
                            </div>
                        </div>
                      </div>
                `;
            });
            document.querySelector('#inEmployes2').innerHTML = form2;


            let brandphones = JSON.parse(this.responseText)[2].brandphones;
            let form3 = "";
            brandphones.forEach(async e => {
                form3 +=
                `
                <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class"d-flex">
                            <h1>${e.name}</h1>
                            <h6>${e.price}</h6>
                            <p>${e.prefered}</p>
                            </div>
                        </div>
                      </div>
                `;
            });
            document.querySelector('#inEmployes3').innerHTML = form3;


            let countries = JSON.parse(this.responseText)[3].countries;
            let form4 = "";
            countries.forEach(e => {
                form4 +=
                `
                <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class"d-flex">
                            <h1>${e.name}</h1>
                            <h3>${e.population}</h3>
                            <p>${e.percentageofmales}</p>
                            <p>${e.percentageoffemales}</p>
                            </div>
                        </div>
                      </div>
                `;
            });
            document.querySelector('#inEmployes4').innerHTML = form4;
        }
    }
    ajaxtask.send();
}
loadData();