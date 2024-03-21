$(document).ready(() => {

    $('#documentacao').on('click', () => {
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        $.get('suporte.html', data => {
            $('#pagina').html(data)
        })
    })

    //ajax

    $('#competencia').on('change', e =>{

        let competencia = $(e.target).val()
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: dados =>{
                $('#numeroVendas').html(dados.numeroVendas)
                $('#totalVendas').html(dados.totalVendas)
                $('#clientesAtivos').html(dados.clientesAtivos)

            },
            error: erro =>{ console.log(erro)}
        })
    })



})