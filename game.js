function endGame(result) {
    document.getElementById('story').innerHTML = `${result}`;
    document.getElementById('options').innerHTML = '';
}

function makeChoice(choice) {
    switch (choice) {
        case 'past':
            document.getElementById('story').innerHTML = 'Вы вводите координаты для поездки в 1955 год. <br>Машина начинает медленно мерцать, создавая вихрь энергии.<br><br> Вы оказываетесь в городке Хилл Вэлли 1955 года.<br><br> Доктор Браун, молодой и полный энтузиазма, встречает вас с радостью. <br>"Марти! Чудесно видеть тебя. У меня небольшие технические трудности <br>с моим предыдущим изобретением. Кажется, я потерял ключевые детали,<br> и без них я не смогу завершить свои эксперименты.<br> Можешь помочь мне их найти?"';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('help')">Помочь доктору Брауну</button>
                <button onclick="makeChoice('city')">Сначала исследовать город</button>
            `;
            document.getElementById('game').className = 'background-past';
            break;

        case 'help':
            endGame('Вы соглашаетесь помочь Доктору Брауну с поиском деталей <br>и вместе направляетесь к его лаборатории. <br><br>Решив начать обыск с обычного стола в лаборатории,<br> вы внимательно рассматриваете бумаги, рисунки и инструменты. <br><br>Внезапно ваш взгляд падает на маленькую коробку.<br> Открыв ее, вы обнаруживаете ключевые детали для машины времени,<br> о которых рассказывал Доктор Браун.');
            document.getElementById('game').className = 'background-help';
            break;

        case 'city':
            document.getElementById('story').innerHTML = 'Вы соглашаетесь предложить свою помощь, намереваясь вернуться к этому делу позже, <br>и в данный момент решаете отправиться на прогулку по удивительному городу.<br><br> Город Хилл Вэлли 1955 года поражает вас своей удивительной атмосферой <br>— на улицах кипит жизнь, и вы оказываетесь в центре событий. <br>Вокруг вас тянутся стильные автомобили, магазины предлагают оригинальные товары, <br>а в витринах блестят модные новинки того времени. <br>Люди гуляют в стильных нарядах, а в магазинах звучит легкая музыка. <br><br>Ваш взгляд приковывает красочный рынок, где торгуют различными антикварными предметами.<br> На заднем плане виднеется уютное кафе с ароматом свежесваренного кофе.<br> Вам предстоит выбрать, куда направить свои шаги:';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('market')">Поcмотреть на антикварный рынок</button>
                <button onclick="makeChoice('cafe')">Заглянуть в кафе <br>и попробовать традиционное блюдо</button>
            `;
            document.getElementById('game').className = 'background-city';
            break;

        case 'market':
            document.getElementById('story').innerHTML = 'Пройдя антикварный рынок, вы замечаете уютный магазин с древними артефактами. <br>Среди них вы обращаете внимание на загадочный амулет.';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('learn')">Узнать подробнее</button>
                <button onclick="makeChoice('buy')">Приобрести амулет</button>
                <button onclick="makeChoice('go')">Пройти мимо</button>
            `;
            document.getElementById('game').className = 'background-market';
            break;

        case 'learn':
            document.getElementById('story').innerHTML = 'Продавец подходит к вам и рассказывает историю этого древнего предмета.<br> Он утверждает, что амулет связан с невероятными событиями <br>и предостерегает вас от его таинственной силы.';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('buy')">Приобрести амулет</button>
                <button onclick="makeChoice('go')">Поблагодарить и пойти дальше</button>
            `;
            document.getElementById('game').className = 'background-learn';
            break;

        case 'buy':
            endGame('Вас привлекает загадочность амулета, и вы решаете купить его, надеясь на интересные открытия.');
            document.getElementById('game').className = 'background-learn';
            break;

        case 'go':
            endGame('Вы решаете не тратить время на мистические предположения и двигаетесь дальше. <br><br> Пройдя весь рынок, вы вспоминаете, что обещали помочь доктору, <br>и направляетесь к нему.');
            document.getElementById('game').className = 'background-market';
             break;

        case 'cafe':
            document.getElementById('story').innerHTML = 'Пройдя по уютным улицам города, вы решаете заглянуть в небольшое кафе, <br> расположенное в углу улицы. Дверь со звоном оповещает о вашем входе, <br> и вас встречает теплая атмосфера времен старой Америки. <br><br> В кафе царит приятный запах свежесваренного кофе и ароматной выпечки. <br> На стенах висят чб-фотографии и старинные плакаты, <br> создавая атмосферу уюта и ностальгии. <br> Официанты в ретро-форме оживленно обслуживают посетителей. <br><br> Вы выбираете уютный столик у окна. <br> Меню представлено на красиво оформленных листах бумаги <br> с выгравированными шрифтами. <br> Какое блюдо вы хотели бы попробовать в этом аутентичном кафе?';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('burger')">Бургер</button>
                <button onclick="makeChoice('soup')">Суп</button>
            `;
            document.getElementById('game').className = 'background-cafe';
            break;

        case 'burger':
            endGame('Ваши глаза заостряются на "Ретро-бургере" — главном хите этого заведения. <br><br> Вскоре официантка приносит ваш выбор. Булочка обжарена до золотистой корки, <br> внутри сочная говяжья котлета, хрустящий лист салата, <br> свежие помидоры и соус, дополняющие великолепный вкус. <br><br> После трапезы вы решаете отправиться обратно к Доктору Брауну, <br> чтобы продолжить ваше захватывающее приключение.');
            break;

        case 'soup':
            endGame('Решив заказать суп, вы обращаете внимание на разнообразие предложений в меню кафе. <br> Ваш выбор падает на "Красный луковый суп с гренками". <br><br> Суп подают в стильной керамической посуде. <br> Завершив приятный перерыв, вы готовы вернуться к приключениям <br> и продолжить свое удивительное путешествие.');
            break;

        case 'future':
            document.getElementById('story').innerHTML = 'Вы вводите координаты для путешествия в будущее, в 2015 год. <br> Машина медленно начинает мерцать, создавая вихрь энергии, <br> и затем вы оказываетесь в ярком и удивительном городе будущего. <br><br> Вокруг вас мчатся разнообразные автомобили, сверкая светодиодами. <br> Люди в необычной одежде, подобранной под последние тренды, <br> проходят мимо. <br><br> Доктор Браун, стоящий рядом, не может скрыть своего восторга. <br> "Марти, добро пожаловать в 2015 год! <br> Видишь, какие удивительные вещи сделали человечество за эти годы?"';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('exhibition')">Погрузиться в технологические инновации <br> и посетить выставку новых изобретений</button>
                <button onclick="makeChoice('casino')">Проверить свою удачу и посетить казино будущего</button>
            `;
            document.getElementById('game').className = 'background-future';
            break;

         case 'exhibition':
            endGame('Вы решаете посетить выставку, где представлены последние технологические достижения. <br><br> Роботы, использующие искусственный интеллект, впечатляют своими навыками. <br> Виртуальная реальность погружает посетителей в удивительные миры, <br> а дроны предлагают новые способы доставки товаров. <br><br> Вас поражает инновационность и креативность будущего мира.');
            document.getElementById('game').className = 'background-exhibition';
            break;

        case 'casino':
            document.getElementById('story').innerHTML = 'Решив испытать удачу, вы направляетесь в казино будущего, <br> где технологии игровой индустрии достигли новых высот. <br><br> Виртуальные игры, интерактивные автоматы и развлекательные шоу <br> делают ваш визит захватывающим и непредсказуемым.';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('slot')">Испытать удачу на интерактивных <br> игровых автоматах</button>
                <button onclick="makeChoice('show')">Наблюдать за захватывающим <br> развлекательным шоу</button>
            `;
            document.getElementById('game').className = 'background-casino';
            break;

        case 'show':
            endGame('Поднимаясь по лестнице, вас магнитит к развлекательному залу <br> ослепительная яркость сцены. <br><br> В зале царит атмосфера праздника. <br> Шум толпы, яркие огоньки и веселье <br> создают неповторимые эмоции в этом развлекательном уголке 2015 года.');
            document.getElementById('game').className = 'background-show';
            break;

        case 'slot':
            document.getElementById('story').innerHTML = 'Войдя в раздел с интерактивными игровыми автоматами,<br> вы видите перед собой яркие огоньки и слышите музыку, <br> создающую волнующую атмосферу. <br> <br> Выбор настоящих хитов среди азартных игр поражает вас.';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('classic')">Попробовать классические слот-машины</button>
                <button onclick="makeChoice('jek')">Рискнуть на автоматах с прогрессивными джекпотами</button>
            `;
            document.getElementById('game').className = 'background-slot';
            break;

        case 'classic':
            endGame('Перед вами развернутся знакомые символы и звуки, <br> призывающие к удаче. <br> <br> Вращайте барабаны и надеетесь на удачное сочетание, <br> чтобы выиграть.');
            document.getElementById('game').className = 'background-slot';
            break;

        case 'jek':
            document.getElementById('story').innerHTML = 'Внимательно взвесив свои возможности, <br> вы стоите перед интерактивными игровыми автоматами <br> с прогрессивными джекпотами, готовые испытать свою удачу.<br> <br> Определитесь со своей тактикой:';
            document.getElementById('options').innerHTML = `
                <button onclick="makeChoice('max')">Ставка на крупную сумму</button>
                <button onclick="makeChoice('min')">Минимальная ставка</button>
            `;
            document.getElementById('game').className = 'background-jek';
            break;        

        case 'min':
            endGame('Решив сыграть на безопасную ставку, вы не ожидали, <br> что удача будет на вашей стороне. Но волшебство слот-машины срабатывает,<br> и вы удивленно наблюдаете, как выигрышные символы выстраиваются в ряд.<br> <br> Везение, кажется, на вашей стороне даже при минимальной ставке!');
            document.getElementById('game').className = 'background-m';
            break;
    

        case 'max':
            endGame('Вы решаете рискнуть и делаете значительную ставку.<br> <br> Каждое вращение барабанов наполняется волнением, <br> и внезапно на экране вспыхивают яркие символы, <br>создавая выигрышную комбинацию! <br> <br>Поздравляем! Ваш смелый выбор приносит вам не только денежный приз, но и огромное удовлетворение от победы.');
            document.getElementById('game').className = 'background-m';
            break;

        default:
            break;
    }
}
