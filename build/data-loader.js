$.ajax({
    type: 'GET',
    url: 'https://softonix-crud-test.firebaseio.com/to-do-list.json',
    success: function (data) {
        let str = '';
       
        for (key in data) {
            str+= `<tr>`
            str+= `<th>${key}</th>`
            str += `<th>${data[key].title}</th>`
            str+= `<th class="${data[key].done ? 'true' : 'false'}">${data[key].done}</th> `
            str+= `</tr>`
           }
        $('#result').append(str);
        console.log(data);
    }
    });

        
////////////////////////////////////////////////////////////////////
