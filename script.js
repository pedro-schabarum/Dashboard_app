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
                $('#despesas').html(dados.numeroVendas)
                $('#totalVendas').html(dados.totalVendas)
                $('#clientesAtivos').html(dados.clientesAtivos)
                $('#clientesInativos').html(dados.clientesInativos)
                $('#reclamacoes').html(dados.reclamacoes)
                $('#elogios').html(dados.elogios)
                $('#sugestoes').html(dados.sugestoes)
                $('#despesas').html(dados.despesas)
            },
            error: erro =>{ console.log(erro)}
        })
    })



})
