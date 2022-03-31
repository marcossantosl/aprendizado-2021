<html>

<head>
    <title>Meu formulário</title>
</head>

<body>
    <form action="recebe_dados.php"method="GET">
        <select name="categorias[]" multiple>
            <option value="acao">Ação</option>
            <option value="comedia">Comédia</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="suspense">Suspense</option>
            <option value="terror">Terror</option>
        </select>

        <p>
            <input type="checkbox" name="filme[]" value="dmatar1">Duro de Matar 1
            <input type="checkbox" name="filme[]" value="dmatar2">Duro de Matar 2
            <input type="checkbox" name="filme[]" value="dmatar3">Duro de Matar 3
            <input type="checkbox" name="filme[]" value="dmatar4">Duro de Matar 4
        </p>
        <p>
            <input type="radio" name="nota">1
            <input type="radio" name="nota">2
            <input type="radio" name="nota">3
            <input type="radio" name="nota">4
            <input type="radio" name="nota">5
        </p>
        <p><input type="submit" value="Enviar"></p>
    </form>
</body>

</html>