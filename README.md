# 🌟 Visão Geral
O Jogo da Memória é uma aplicação web interativa onde o jogador deve encontrar todos os pares de cartas correspondentes em um tabuleiro. O jogo utiliza tecnologias modernas para criar uma experiência visual e funcional agradável. Além disso, ele permite salvar pontuações e exibir rankings.

# 💻 Tecnologias Utilizadas
Backend : PHP 
Frontend : HTML5, CSS3, JavaScript  
Outros : Arquivo de texto (scores.txt) para armazenamento simples de pontuações.

# 🚀 Como Executar o Projeto
## Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:  

PHP: Versão 7.x ou superior  
Servidor Web: XAMPP, WAMP ou outro servidor local  
Navegador Web: Chrome, Firefox, Edge, etc.

## Configuração do Projeto
### Clone o Repositório :
        
        git clone https://github.com/seu-usuario/memory-game.git

### Coloque os arquivos na pasta do servidor web (ex.: htdocs no XAMPP).

## Executar a Aplicação
1. Inicie o servidor Apache e MySQL no XAMPP/WAMP.
2. Acesse a aplicação no navegador:

        http://localhost/jogo-da-memoria/

# 📂 Estrutura do Projeto
```
/memory-game/
│
├── index.php          # Página principal do jogo
├── style.css          # Estilos CSS3
├── script.js          # Lógica do jogo em JavaScript
├── save_score.php     # Script PHP para salvar pontuação
├── scores.php         # Página para exibir pontuações
└── scores.txt         # Arquivo para armazenar pontuações
```

# 👥 Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga os passos abaixo:  

1. Faça um fork do repositório.  
2. Crie uma nova branch:  

        git checkout -b feature/nova-funcionalidade

3. Faça suas alterações e commit:

        git commit -m 'Adiciona nova funcionalidade'

4. Envie as alterações para sua branch:

        git push origin feature/nova-funcionalidade

5. Abra um Pull Request explicando suas mudanças.

# 📜 Licença
Este projeto está licenciado sob a MIT License . Veja o arquivo LICENSE para mais detalhes.


# 🎮 Como Jogar
### Iniciar o Jogo :
Ao acessar a página inicial, o tabuleiro será carregado automaticamente.
### Virar Cartas :
Clique em duas cartas para revelar seus valores.
### Acertos e Erros :
Se as cartas forem iguais, elas permanecem viradas com um sombreamento verde.  
Se forem diferentes, elas voltam ao estado original após 1 segundo, com um sombreamento vermelho temporário.  
### Finalizar o Jogo :
Quando todos os pares forem encontrados, aparecerá uma mensagem de vitória e a opção de salvar sua pontuação.
### Salvar Pontuação :
Após o jogo, clique em "Salvar Pontuação" para registrar sua pontuação.
### Ver Rankings :
Acesse a página scores.php para ver as pontuações registradas.

# 👤 Autor
Desenvolvido por Breno.  
    GitHub: @brenororiz  
    LinkedIn: linkedin.com/in/breno-roriz-413312301  
    Email: brenororiz@gmail.com 

# 🙏 Agradecimentos
Inspirado em jogos clássicos de memória.  
Ícones e cores inspirados em designs modernos e minimalistas.  