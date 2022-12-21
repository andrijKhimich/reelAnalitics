const jsonFile = document.querySelector('.json-file');

if (jsonFile) {
  const url = jsonFile.textContent;

  const getData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.length)
        // return json;
        for (let i = 0; i < json.length; i++) {
          // console.log(json[i]);
          let template =
            `<tr>
          <td>
            <div class="table-user">
              <div class="table-name">
                <p>${json[i].first_name}</p>
                <p>${json[i].last_name}</p>
              </div>
            </div>
          </td>
          <td>
            <span>${json[i].Position}</span>
            <p>${json[i].position_group}</p>
          </td>
          <td>
            <span>${json[i].height}</span>
            <p>feet/inches</p>
          </td>
          <td>
            <span>${json[i].weight}</span>
            <p>pounds</p>
          </td>
          <td>
            <span>${json[i].high_school}</span>
          </td>
          <td>
            <span>${json[i].State}</span>
          </td>
          <td>
            <span>${json[i].City}</span>
          </td>
          <td>
            <span>${json[i].IGA}</span>
          </td>
          <td>
            <span>${json[i].Class}</span>
          </td>
        </tr>`;
          // console.log(template);
          // console.log();
          const table = document.querySelector('.board-scroll table');
          // console.log(tableElement);
          table.insertAdjacentHTML('beforeEnd', template);
        }
      })

    // const url = './data/data.json';
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // return data;
  };
  getData();
}