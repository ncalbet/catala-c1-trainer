const THEORY = {
  'Connectors': {
    level: 'b2',
    icon: '🔗',
    subtitle: 'Connecta idees i estructura el discurs',
    sections: [
      {
        title: 'Què són els connectors?',
        icon: '📌',
        body: `<p>Els connectors (o marcadors discursius) són paraules o expressions que estableixen relacions lògiques entre les parts d'un text. Sense ells, el discurs seria una successió d'idees sense cohesió.</p>
               <p>Al nivell B2 cal dominar els connectors més habituals i saber triar-ne el més adequat segons la relació que es vol expressar.</p>`
      },
      {
        title: 'Connectors per funció',
        icon: '📊',
        table: {
          headers: ['Funció', 'Connectors principals', 'Exemple'],
          rows: [
            ['Addició', 'a més (a més), també, fins i tot, d\'altra banda', 'A més, cal tenir en compte els costos.'],
            ['Causa', 'perquè, ja que, atès que, donat que, com que', 'No va venir perquè estava malalt.'],
            ['Conseqüència', 'per tant, per consegüent, és per això que, així doncs', 'Va treballar molt; per tant, va tenir èxit.'],
            ['Oposició', 'però, tanmateix, no obstant això, malgrat tot', 'És difícil; tanmateix, és possible.'],
            ['Concessió', 'tot i que, encara que, malgrat que, per bé que', 'Tot i que plovia, van sortir.'],
            ['Ordre', 'en primer lloc, a continuació, finalment, per acabar', 'En primer lloc, analitzarem...'],
          ]
        }
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        body: `<p>Evita repetir sempre el mateix connector. «Però» i «i» s'usen massa sovint en registres informals.</p>`,
        rules: [
          { bad: 'Però, és difícil.', good: 'Tanmateix, és difícil. / No obstant això, és difícil.' },
          { bad: 'I també, cal dir que...', good: 'A més, cal dir que... / Addicionalment, cal dir que...' },
          { bad: 'Però malgrat tot, va continuar.', good: 'Tot i les dificultats, va continuar. (No acumulis connectors de contrast.)' },
        ]
      }
    ]
  },

  'Subjuntiu': {
    level: 'b2',
    icon: '🔀',
    subtitle: 'Quan i com usar el mode subjuntiu',
    sections: [
      {
        title: 'Quan s\'usa el subjuntiu?',
        icon: '📌',
        body: `<p>El subjuntiu és el mode de la incertesa, el desig, la hipòtesi i la valoració. S'usa quan l'acció de la frase subordinada no és un fet real i objectiu, sinó que depèn de la perspectiva del parlant.</p>
               <p>La clau per detectar-lo: si el verb principal expressa <strong>desig, dubte, valoració, ordre o possibilitat</strong>, el verb subordinat sol anar en subjuntiu.</p>`
      },
      {
        title: 'Contexts que exigeixen subjuntiu',
        icon: '📋',
        rules: [
          { label: 'Desig i voluntat', example: '«Vull que vinguis.» «Espero que pugui ser.»' },
          { label: 'Valoració', example: '«És important que ho entenguis.» «Cal que ho facis ara.»' },
          { label: 'Ordre i petició', example: '«Et demano que ho revisis.» «Insisteix que venguin.»' },
          { label: 'Dubte i negació d\'existència', example: '«Dubto que sigui veritat.» «No hi ha ningú que sàpiga.»' },
          { label: 'Concessió (hipotètica)', example: '«Encara que plogui, sortirem.»' },
        ]
      },
      {
        title: 'Formes del present de subjuntiu',
        icon: '📊',
        table: {
          headers: ['Persona', 'Verbs en -ar (parlar)', 'Verbs en -er/-re (poder)', 'Verbs en -ir (venir)'],
          rows: [
            ['jo', 'parli', 'pugui', 'vingui'],
            ['tu', 'parlis', 'puguis', 'vinguis'],
            ['ell/ella', 'parli', 'pugui', 'vingui'],
            ['nosaltres', 'parlem', 'puguem', 'vinguem'],
            ['vosaltres', 'parleu', 'pugueu', 'vingueu'],
            ['ells/elles', 'parlin', 'puguin', 'vinguin'],
          ]
        }
      },
      {
        title: 'Indicatiu vs. Subjuntiu',
        icon: '⚖️',
        body: `<p>La diferència entre indicatiu i subjuntiu pot canviar el significat radicalment:</p>`,
        examples: [
          { text: '«Busco un treballador que parla anglès.» → n\'existeix un de concret (indicatiu)' },
          { text: '«Busco un treballador que parli anglès.» → no sé si existeix (subjuntiu)' },
          { text: '«Sé que ve demà.» → fet cert (indicatiu)' },
          { text: '«Vull que vingui demà.» → desig (subjuntiu)' },
        ]
      }
    ]
  },

  'Cohesió textual': {
    level: 'b2',
    icon: '🧩',
    subtitle: 'Com estructurar i donar coherència a un text',
    sections: [
      {
        title: 'Coherència vs. Cohesió',
        icon: '📌',
        body: `<p><strong>Coherència</strong> és la lògica interna del text: les idees han de tenir sentit i progressar de manera ordenada.</p>
               <p><strong>Cohesió</strong> és l'ús dels mecanismes lingüístics que lliguen les frases i els paràgrafs entre si: pronoms, sinònims, el·lipsis, connectors, etc.</p>`
      },
      {
        title: 'Mecanismes de cohesió',
        icon: '🔧',
        rules: [
          { label: 'Referència pronominal', example: 'El president va parlar. Ell va dir que... → «Ell» evita repetir «el president».' },
          { label: 'Sinònims i perífrasis', example: '«L\'escriptor... l\'autor... el novel·lista...» → Evita repetir la mateixa paraula.' },
          { label: 'El·lipsi', example: '«En Joan va arribar tard i (ell) va demanar perdó.» → El subjecte s\'omet per no repetir-lo.' },
          { label: 'Connectors d\'ordre', example: '«En primer lloc... A continuació... Finalment...» → Guien el lector per l\'argument.' },
        ]
      },
      {
        title: 'Estructura d\'un paràgraf',
        icon: '📐',
        body: `<p>Un bon paràgraf té tres parts:</p>`,
        examples: [
          { text: '1. Frase topic: presenta la idea principal del paràgraf.' },
          { text: '2. Desenvolupament: arguments, exemples, dades que la sostenen.' },
          { text: '3. Frase de tancament: sintetitza o connecta amb el paràgraf següent.' },
        ]
      }
    ]
  },

  'Comprensió lectora': {
    level: 'b2',
    icon: '📖',
    subtitle: 'Estratègies per entendre textos complexos',
    sections: [
      {
        title: 'Llegir en dos passos',
        icon: '📌',
        body: `<p>Al B2, els textos requereixen una lectura estratègica. Llegir tot dues vegades és la clau:</p>`,
        rules: [
          { label: 'Primera lectura (global)', example: 'Llegeix ràpid per captar el tema general, el to i l\'estructura.' },
          { label: 'Segona lectura (detall)', example: 'Focalitza en les preguntes: cerca les respostes al text, no suposicions.' },
        ]
      },
      {
        title: 'Com identificar la idea principal',
        icon: '🎯',
        body: `<p>La idea principal no sempre és la primera frase. Pregunta't: <em>«Quin missatge vol transmetre l'autor?»</em></p>
               <p>Descarta les idees secundàries (exemples, detalls, comparacions) i busca l'afirmació més general que engloba tot el text.</p>`
      },
      {
        title: 'Trampes habituals',
        icon: '⚠️',
        examples: [
          { text: 'Opcions que usen paraules del text però canvien el significat → llegeix amb atenció.' },
          { text: 'Opcions massa extremes («sempre», «mai», «tots») → solen ser incorrectes.' },
          { text: 'Opcions que barregen informació verídica del text però que no responen la pregunta.' },
        ]
      }
    ]
  },

  'Producció escrita': {
    level: 'b2',
    icon: '🖊️',
    subtitle: 'Com redactar textos clars i ben estructurats',
    sections: [
      {
        title: 'Planifica abans d\'escriure',
        icon: '📌',
        body: `<p>Mai comencis directament a escriure. Dedica 2-3 minuts a:</p>`,
        rules: [
          { label: '1. Entendre l\'encàrrec', example: 'Quina és la tasca exacta? (carta, informe, article, opinió...)' },
          { label: '2. Identificar el registre', example: 'Formal, informal, acadèmic? A qui va dirigit el text?' },
          { label: '3. Fer un esquema breu', example: 'Introducció → punt 1 → punt 2 → conclusió.' },
        ]
      },
      {
        title: 'Estructura bàsica',
        icon: '📐',
        examples: [
          { text: 'Introducció: presenta el tema i l\'objectiu.' },
          { text: 'Desenvolupament: 2-3 paràgrafs amb arguments o informació. Un paràgraf = una idea.' },
          { text: 'Conclusió: resum o valoració final. No introdueixis idees noves.' },
        ]
      },
      {
        title: 'Recursos per millorar el text',
        icon: '✨',
        body: `<p>Usa varietat lèxica (sinònims), connectors variats i revisa sempre la concordança i els accents.</p>`,
        rules: [
          { label: 'Evita repeticions', example: '«dir» → afirmar, manifestar, assenyalar, apuntar.' },
          { label: 'Usa perífrasis d\'obligació', example: '«Cal + infinitiu», «s\'ha de + infinitiu», «és necessari que + subjuntiu».' },
          { label: 'Revisa la concordança', example: 'El verb ha de concordar amb el subjecte: «Les mesures són eficaces».' },
        ]
      }
    ]
  },

  'Lèxic formal': {
    level: 'b2',
    icon: '📚',
    subtitle: 'Ampliar el vocabulari i ajustar el registre',
    sections: [
      {
        title: 'Per què el registre és important?',
        icon: '📌',
        body: `<p>El registre és l'adequació del llenguatge al context. Usar un registre inadequat (massa informal en un text formal, o massa rígid en una conversa) és un error comunicatiu greu, igual que una falta gramatical.</p>`
      },
      {
        title: 'Substitucions clau',
        icon: '🔄',
        table: {
          headers: ['Registre informal/genèric', 'Registre formal/precís', 'Exemple'],
          rows: [
            ['dir', 'afirmar, manifestar, declarar, anunciar', 'La directora va declarar que...'],
            ['fer', 'dur a terme, realitzar, executar, impulsar', 'Van dur a terme les reformes.'],
            ['tenir', 'disposar de, comptar amb, posseir', 'El centre disposa d\'equipament modern.'],
            ['coses', 'elements, aspectes, qüestions, factors', 'Cal analitzar tots els factors.'],
            ['molt gran', 'considerable, substancial, notable, d\'envergadura', 'Un creixement considerable.'],
            ['bo/bona', 'adequat, òptim, satisfactori, positiu', 'Un resultat satisfactori.'],
          ]
        }
      },
      {
        title: 'Calcs del castellà a evitar',
        icon: '⚠️',
        table: {
          headers: ['Incorrecte (calc)', 'Correcte en català'],
          rows: [
            ['donar-se compte', 'adonar-se'],
            ['realitzar un treball', 'fer un treball / dur a terme un treball'],
            ['a nivell de', 'quant a / pel que fa a / en matèria de'],
            ['de cara a', 'per a / amb vista a / de cara a (admès en alguns contextos)'],
            ['tenir en compte', 'tenir en compte (correcte) / considerar'],
          ]
        }
      }
    ]
  },

  'Interferències': {
    level: 'b2',
    icon: '🚧',
    subtitle: 'Evitar calcs i errors per influència del castellà',
    sections: [
      {
        title: 'Què és una interferència?',
        icon: '📌',
        body: `<p>Una interferència lingüística és un error causat per la influència d'una altra llengua (en aquest cas, el castellà). Els calcs poden ser lèxics (paraules), sintàctics (estructures) o semàntics (significats).</p>`
      },
      {
        title: 'Interferències lèxiques freqüents',
        icon: '📊',
        table: {
          headers: ['Forma incorrecta', 'Forma correcta', 'Tipus d\'error'],
          rows: [
            ['*donar-se compte', 'adonar-se', 'calc del castellà «darse cuenta»'],
            ['*lo important', 'allò important / el que és important', 'article neutre inexistent en català'],
            ['*el/la mateix/a', 'el mateix / la mateixa (cuidar l\'ús)', 'calc anafòric excessiu'],
            ['*en base a', 'basant-se en / a partir de', 'preposició calcada'],
            ['*a nivell de', 'quant a / pel que fa a', 'calc preposicional'],
            ['*moltes gràcies per tot', 'moltes gràcies per tot (correcte)', 'notar que «per» funciona aquí'],
          ]
        }
      },
      {
        title: 'Interferències sintàctiques',
        icon: '⚠️',
        rules: [
          { label: 'Passiva amb «ser» + participi', example: '«El projecte va ser aprovat» → correcte, però millor: «El projecte es va aprovar» o «Van aprovar el projecte».' },
          { label: 'Gerundi de posterioritat', example: '«Va arribar, agafant el cotxe» → Incorrecte. «Va arribar i va agafar el cotxe».' },
          { label: 'Relatiu «que» per «del qual»', example: '«El tema que hem parlat» → «El tema del qual hem parlat».' },
        ]
      }
    ]
  },

  'Perífrasis verbals': {
    level: 'b2',
    icon: '⚙️',
    subtitle: 'Construccions verb + infinitiu per expressar aspecte i modalitat',
    sections: [
      {
        title: 'Què és una perífrasi verbal?',
        icon: '📌',
        body: `<p>Una perífrasi verbal és la combinació d'un verb auxiliar (conjugat) + infinitiu, gerundi o participi. L'auxiliar perd el seu significat original i aporta un valor aspectual o modal.</p>`
      },
      {
        title: 'Perífrasis d\'obligació i necessitat',
        icon: '📋',
        rules: [
          { label: 'Cal + infinitiu', example: '«Cal estudiar cada dia.» (obligació impersonal)' },
          { label: 'S\'ha de + infinitiu', example: '«S\'ha de lliurar el treball.» (obligació impersonal)' },
          { label: 'Haver de + infinitiu', example: '«He de marxar.» (obligació personal)' },
          { label: 'Cal que + subjuntiu', example: '«Cal que ho estudieu.» (obligació impersonal + persona concreta)' },
        ]
      },
      {
        title: 'Perífrasis d\'aspecte',
        icon: '📊',
        table: {
          headers: ['Perífrasi', 'Valor', 'Exemple'],
          rows: [
            ['Acabar de + inf.', 'Acció recentment acabada', 'Acabo d\'arribar.'],
            ['Estar + gerundi', 'Acció en curs', 'Estic escrivint l\'informe.'],
            ['Anar a + inf.', 'Futur immediat', 'Vaig a presentar els resultats.'],
            ['Tornar a + inf.', 'Repetició', 'Va tornar a cometre el mateix error.'],
            ['Deixar de + inf.', 'Interrupció', 'Ha deixat de fumar.'],
          ]
        }
      }
    ]
  },

  /* ─── C1 CATEGORIES ─── */

  'Subjuntiu avançat': {
    level: 'c1',
    icon: '🔀',
    subtitle: 'Subjuntiu imperfet, condicionals irrels i usos complexos',
    sections: [
      {
        title: 'El subjuntiu imperfet',
        icon: '📌',
        body: `<p>El subjuntiu imperfet s'usa quan el verb principal és en passat o condicional, i la subordinada exigeix subjuntiu. És equivalent temporal al condicional: mentre el present de subj. correspon al futur, l'imperfet de subj. correspon al condicional.</p>`
      },
      {
        title: 'Terminacions del subjuntiu imperfet',
        icon: '📊',
        table: {
          headers: ['Persona', 'Verbs en -ar (parlar)', 'Verbs en -er (tenir)', 'Verbs en -ir (venir)'],
          rows: [
            ['jo', 'parlés', 'tingués', 'vingués'],
            ['tu', 'parlessis', 'tinguessis', 'vinguessis'],
            ['ell/ella', 'parlés', 'tingués', 'vingués'],
            ['nosaltres', 'parléssim', 'tinguéssim', 'vinguéssim'],
            ['vosaltres', 'parléssiu', 'tinguéssiu', 'vinguéssiu'],
            ['ells/elles', 'parlessin', 'tinguessin', 'vinguessin'],
          ]
        }
      },
      {
        title: 'Condicionals (reals vs. hipotètiques vs. irrels)',
        icon: '⚖️',
        table: {
          headers: ['Tipus', 'Estructura', 'Exemple'],
          rows: [
            ['Real (possible)', 'Si + present ind. + futur', 'Si estudies, aprovaràs.'],
            ['Hipotètica (poc probable)', 'Si + imperfet subj. + condicional', 'Si tingués diners, viatjaria.'],
            ['Irreal (passat)', 'Si + plusquamperfet subj. + condicional perifràstic', 'Si hagués estudiat, hauria aprovat.'],
          ]
        }
      },
      {
        title: 'Altres usos del subjuntiu al C1',
        icon: '📋',
        rules: [
          { label: 'Sense que (verb directe)', example: '«Vull que vingui» → formal: «Li demano que prengui nota.»' },
          { label: 'Relatives amb antecedent negatiu', example: '«No hi ha ningú que sàpiga respondre.»' },
          { label: 'Oracions temporals de futur', example: '«Quan arribi, l\'avisa.» → NO «quan arribarà».' },
          { label: 'Per bé que / si bé (concessives)', example: '«Per bé que sigui difícil, cal intentar-ho.»' },
        ]
      }
    ]
  },

  'Connectors concessius': {
    level: 'c1',
    icon: '🔗',
    subtitle: 'Connectors avançats per expressar oposició i concessió',
    sections: [
      {
        title: 'La concessió: expressar un obstacle que no impedeix',
        icon: '📌',
        body: `<p>Les construccions concessives expressen que un obstacle o circumstància adversa <strong>no impedeix</strong> la realització de l'acció principal. Són essencials en l'argumentació formal i acadèmica.</p>
               <p>Estructura bàsica: <em>Malgrat [l'obstacle], [l'acció es produeix].</em></p>`
      },
      {
        title: 'Connectors concessius i el seu ús',
        icon: '📊',
        table: {
          headers: ['Connector', 'Segueix de...', 'Exemple'],
          rows: [
            ['malgrat', 'nom / pronom / infinitiu', 'Malgrat les dificultats, va continuar.'],
            ['tot i', 'nom / pronom / infinitiu', 'Tot i ploure, van sortir. / Tot i la crisi...'],
            ['tot i que', 'indicatiu o subjuntiu', 'Tot i que era tard, va trucar.'],
            ['encara que', 'indicatiu (fet) / subjuntiu (hipòtesi)', 'Encara que sigui difícil, cal fer-ho.'],
            ['per bé que', 'subjuntiu (registre formal)', 'Per bé que els resultats siguin positius...'],
            ['si bé', 'indicatiu (registre formal)', 'Si bé els resultats milloren, cal prudència.'],
            ['malgrat que', 'indicatiu o subjuntiu', 'Malgrat que va protestar, va acceptar.'],
          ]
        }
      },
      {
        title: 'Connectors d\'oposició vs. concessió',
        icon: '⚖️',
        body: `<p>Oposició simple (contrast directe) i concessió (obstacle que no impedeix) no són el mateix:</p>`,
        rules: [
          { label: 'Oposició (però, tanmateix)', example: '«És difícil, però és possible.» → Contrast directe entre dos fets.' },
          { label: 'Concessió (tot i que, malgrat)', example: '«Tot i que és difícil, ho aconseguirem.» → La dificultat no impedeix l\'èxit.' },
        ]
      }
    ]
  },

  'Lèxic formal': {
    level: 'c1',
    icon: '📚',
    subtitle: 'Precisió lèxica, sinonímia i registre acadèmic',
    sections: [
      {
        title: 'Precisió vs. genericitat',
        icon: '📌',
        body: `<p>Al C1, el lèxic genèric és un dels errors més penalitzats. Cada paraula ha d'aportar informació precisa. Els verbs «fer», «dir», «tenir» i els noms «cosa», «aspecte», «tema» (quan no és necessari) solen ser senyals d'imprecisió lèxica.</p>`
      },
      {
        title: 'Famílies lèxiques per a la producció formal',
        icon: '📊',
        table: {
          headers: ['Camp semàntic', 'Verbs precisos', 'Noms associats'],
          rows: [
            ['Comunicació', 'manifestar, declarar, anunciar, expressar, al·ludir, subratllar', 'declaració, afirmació, discurs, al·locució'],
            ['Acció / Execució', 'dur a terme, executar, impulsar, promoure, implementar', 'implementació, execució, desplegament'],
            ['Anàlisi', 'examinar, avaluar, constatar, determinar, evidenciar', 'anàlisi, diagnosi, avaluació, estudi'],
            ['Problema', 'sorgir, agreujar-se, persistir, resoldre, abordar', 'problemàtica, mancança, dèficit, repte'],
            ['Millora', 'optimitzar, reforçar, consolidar, enfortir, actualitzar', 'millora, avenç, progrés, optimització'],
          ]
        }
      },
      {
        title: 'Construccions nominals formals',
        icon: '✨',
        body: `<p>En textos acadèmics i formals, es prefereix el sintagma nominal a la frase verbal senzilla. Això aporta densitat informativa i registre elevat.</p>`,
        rules: [
          { label: 'Verbalitzar → Nominalitzar', example: '«Han analitzat el problema» → «L\'anàlisi del problema ha posat de manifest...»' },
          { label: 'Estructures recurrents', example: '«La present anàlisi té per objecte...» / «Cal destacar que...» / «S\'observa una tendència a...»' },
          { label: 'Marques d\'objectivitat', example: '«Segons les dades disponibles...» / «D\'acord amb les evidències...» / «Com s\'ha esmentat anteriorment...»' },
        ]
      }
    ]
  },

  'Argumentació': {
    level: 'c1',
    icon: '🧠',
    subtitle: 'Construir arguments acadèmics sòlids i ben estructurats',
    sections: [
      {
        title: 'Estructura de l\'argumentació al C1',
        icon: '📌',
        body: `<p>Un text argumentatiu C1 no es limita a presentar una opinió: ha de sostenir-la amb arguments, anticipar objeccions i respondre-hi. Aquest diàleg intern entre posicions és el que distingeix un text de nivell avançat.</p>`
      },
      {
        title: 'Model d\'argumentació acadèmica',
        icon: '📐',
        examples: [
          { text: '1. Tesi: Presenta l\'argument central de manera clara i directa.' },
          { text: '2. Fonamentació: Argumenta la tesi amb raons, dades o exemples.' },
          { text: '3. Contraargument: Reconeix una posició contrària («Tot i això, alguns autors...»).' },
          { text: '4. Refutació o matís: Respon al contraargument o el matises.' },
          { text: '5. Conclusió: Reforça la tesi inicial integrant els matisos.' },
        ]
      },
      {
        title: 'Connectors per a l\'argumentació avançada',
        icon: '🔗',
        table: {
          headers: ['Funció', 'Connectors C1'],
          rows: [
            ['Presentar tesi', 'Cal tenir present que... / Convé subratllar que... / Es fa palès que...'],
            ['Afegir argument', 'Així mateix, / D\'altra banda, / En aquest sentit, / Igualment,'],
            ['Contraargument', 'Tot i això, / No obstant, / Malgrat el que s\'ha dit,'],
            ['Matís', 'Ara bé, / Dit això, / Sense negar que... / Cal matisar que...'],
            ['Conclusió', 'Per consegüent, / En definitiva, / Podem concloure que... / Tot plegat,'],
          ]
        }
      }
    ]
  },

  'Comprensió crítica': {
    level: 'c1',
    icon: '🔍',
    subtitle: 'Interpretar textos complexos i detectar implicatures',
    sections: [
      {
        title: 'Més enllà del contingut explícit',
        icon: '📌',
        body: `<p>Al C1, la comprensió lectora no és qüestió de trobar la informació al text: és qüestió d'<strong>interpretar</strong> el que l'autor implica, insinua o pressuposa sense dir-ho directament.</p>
               <p>Cal llegir entre línies: quin to adopta l'autor? Quines paraules tria i per què? Quina posició implícita defensa?</p>`
      },
      {
        title: 'Pistes per a la interpretació',
        icon: '🔎',
        rules: [
          { label: 'Paraules valoratives', example: '«Paradoxa», «anomalia», «necessitat fonamental» → L\'autor pren posició.' },
          { label: 'Negacions significatives', example: '«No és una anomalia» → L\'autor refuta una visió negativa, per tant la justifica.' },
          { label: 'Modalitat epistèmica', example: '«Sembla que», «és probable que», «cal considerar» → Grau de certesa.' },
          { label: 'Relació causa-efecte implícita', example: 'Si l\'autor descriu A i B sense connector explícit, pot estar insinuant que A causa B.' },
        ]
      },
      {
        title: 'Trampes en les opcions de resposta',
        icon: '⚠️',
        examples: [
          { text: 'Opció "massa forta": generalitza en excés el que diu el text («sempre», «inevitablement»).' },
          { text: 'Opció "verídica però irrellevant": conté informació correcta del text però no respon la pregunta.' },
          { text: 'Opció "contrària al to": usa les mateixes paraules però amb valoració oposada a la de l\'autor.' },
        ]
      }
    ]
  },

  'Producció formal': {
    level: 'c1',
    icon: '🖊️',
    subtitle: 'Redactar textos acadèmics i professionals de nivell avançat',
    sections: [
      {
        title: 'El registre acadèmic',
        icon: '📌',
        body: `<p>El registre acadèmic i professional al C1 té trets propis: objectivitat, impersonalitat, densitat informativa i precisió lèxica. No és simplement «escriure correctament»: és adoptar les convencions discursives del gènere textual.</p>`
      },
      {
        title: 'Estructura d\'un informe o text formal',
        icon: '📐',
        examples: [
          { text: 'Títol i encapçalament: breu, informatiu, sense article al titular.' },
          { text: 'Introducció: «La present anàlisi té per objecte...» / «L\'objectiu d\'aquest informe és...»' },
          { text: 'Cos: paràgrafs temàtics, un per idea. Cada paràgraf comença amb la idea principal.' },
          { text: 'Conclusió: síntesi i, si escau, recomanacions. «En definitiva...» / «Cal concloure que...»' },
        ]
      },
      {
        title: 'Impersonalitat i objectivitat',
        icon: '⚖️',
        rules: [
          { label: 'Evita la 1a persona singular', example: '«Crec que» → «Cal considerar que» / «Sembla evident que».' },
          { label: 'Usa la passiva reflexa', example: '«S\'han observat canvis significatius.» / «Es constata una millora.»' },
          { label: 'Modalitat epistèmica', example: '«Cal tenir en compte» / «Convé subratllar» / «Es fa palès que».' },
          { label: 'Referència al document', example: '«Com s\'ha assenyalat anteriorment» / «D\'acord amb les dades presentades».' },
        ]
      },
      {
        title: 'Fórmules d\'informe útils',
        icon: '📋',
        examples: [
          { text: '«La present anàlisi posa de manifest que...»' },
          { text: '«D\'acord amb les evidències disponibles, cal concloure que...»' },
          { text: '«Es recomana, per consegüent, que...»' },
          { text: '«L\'estudi constata l\'existència d\'una relació directa entre X i Y.»' },
        ]
      }
    ]
  },

  'Oracions de relatiu': {
    level: 'c1',
    icon: '🔗',
    subtitle: 'Ús culte dels pronoms relatius i construccions de relatiu',
    sections: [
      {
        title: 'El relatiu «que» i les seves limitacions',
        icon: '📌',
        body: `<p>«Que» és el relatiu més freqüent, però en registre culte i formal és insuficient quan va precedit de preposició o quan pot crear ambigüitat. En aquests casos s'usa «el qual / la qual / els quals / les quals».</p>`
      },
      {
        title: 'Pronoms relatius al C1',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Ús', 'Exemple'],
          rows: [
            ['que', 'Subjecte o objecte directe (sense preposició)', 'El document que has enviat...'],
            ['el qual / la qual...', 'Amb preposició o per evitar ambigüitat', 'El tema del qual hem parlat... / La comissió la qual va redactar...'],
            ['qui', 'Persones, quan és subjecte de la subordinada', 'Els qui vulguin participar que ho comuniquin.'],
            ['on', 'Lloc', 'La ciutat on va néixer és Barcelona.'],
            ['quan', 'Temps (registre literari)', 'En el moment en què es va produir...'],
            ['com', 'Mode', 'La manera com ho ha resolt és exemplar.'],
          ]
        }
      },
      {
        title: 'Relatives explicatives vs. especificatives',
        icon: '⚖️',
        rules: [
          { label: 'Especificativa (sense comes)', example: '«El professor que sap molt de sintaxi és el nostre.» → Identifica quin professor.' },
          { label: 'Explicativa (amb comes)', example: '«El professor, que sap molt de sintaxi, ens ha ajudat molt.» → Afegeix informació sobre un professor ja identificat.' },
        ]
      }
    ]
  },

  'Subjuntiu imperfet': {
    level: 'c1',
    icon: '🔀',
    subtitle: 'Usos del subjuntiu imperfet en contextos formals i literaris',
    sections: [
      {
        title: 'Quan s\'usa el subjuntiu imperfet?',
        icon: '📌',
        body: `<p>El subjuntiu imperfet s'usa quan el verb de la principal és en temps passat (pretèrit perfet perifràstic, imperfet, plusquamperfet) o en condicional, i la subordinada exigeix subjuntiu.</p>
               <p>Regla de la concordança temporal: present de subj. → present/futur; imperfet de subj. → passat/condicional.</p>`
      },
      {
        title: 'Concordança de temps',
        icon: '📊',
        table: {
          headers: ['Verb principal (temps)', 'Verb subordinat', 'Exemple'],
          rows: [
            ['Present / Futur', 'Present de subj.', 'Vull que vingui. / Voldré que vingui.'],
            ['Passat (perifràstic)', 'Imperfet de subj.', 'Vaig voler que vingués.'],
            ['Imperfet', 'Imperfet de subj.', 'Volia que vingués.'],
            ['Condicional', 'Imperfet de subj.', 'Voldria que vingués.'],
            ['Plusquamperfet subj.', 'Per a irreals en el passat', 'Si hagués vingut, hauria estat millor.'],
          ]
        }
      },
      {
        title: 'Usos específics de l\'imperfet de subjuntiu',
        icon: '📋',
        rules: [
          { label: 'Estil indirecte en passat', example: '«Va demanar que tots arribessin puntuals.»' },
          { label: 'Desig hipotètic (amb ojala, tant de bo)', example: '«Tant de bo ho sabés!» → desig difícil d\'acomplir.' },
          { label: 'Fórmules de cortesia', example: '«Voldria que m\'expliqués...» → condicional + subj. imperfet.' },
        ]
      }
    ]
  },

  'Pronoms febles': {
    level: 'c1',
    icon: '🔵',
    subtitle: 'El sistema de pronoms febles del català: combinació i col·locació',
    sections: [
      {
        title: 'Què són els pronoms febles?',
        icon: '📌',
        body: `<p>Els pronoms febles (o àtons) substitueixen sintagmes nominals per evitar repeticions. El català té un sistema de pronoms febles especialment ric i complex, molt diferent del castellà, amb pronoms sense equivalent directe com «en», «hi» i els reflexius.</p>
               <p>Es col·loquen <strong>davant del verb</strong> (proclítics) en frases no imperatives i <strong>darrere del verb</strong> (enclítics, units amb guionet) en imperatius, infinitius i gerundis.</p>`
      },
      {
        title: 'Quadre dels pronoms febles principals',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Funció', 'Exemple clàssic'],
          rows: [
            ['el, la, els, les', 'CD (cosa o persona determinada)', 'El veig. / La truco. / Els crido.'],
            ['em, et, es, ens, us', 'CD persona / reflexiu / recíproc', 'Em veuen. / Es pentina. / Ens estimem.'],
            ['li, els (li)', 'CI (persona)', 'Li explico el problema. / Els ho dono.'],
            ['en', 'CD partitiu / complement de «de» / quantitat', 'En vull tres. / En parlem. / En vinc, de París.'],
            ['hi', 'Complement de «a/en/amb» (lloc o altre) / substitut CI amb certes estructures', 'Hi vaig demà. / Hi penso molt. / No hi estic d\'acord.'],
            ['ho', 'Atribut / CD neutre / substitut d\'una frase sencera', 'Ho és, president. / Ho sé. / Ho diu sempre.'],
          ]
        }
      },
      {
        title: 'El pronom «en»: usos principals',
        icon: '🔵',
        rules: [
          { label: 'CD partitiu (sense article o amb indefinit)', example: '«Vols formatge?» «Sí, en vull.» / «En tinc molt.»' },
          { label: 'Substitut de complement amb «de»', example: '«Parleu de política?» «Sí, en parlem.»' },
          { label: 'Procedència (lloc d\'origen)', example: '«Véns de Barcelona?» «Sí, en vinc.»' },
          { label: 'Quantitat com a complement', example: '«Quants llibres tens?» «En tinc cinc.»' },
        ]
      },
      {
        title: 'El pronom «hi»: usos principals',
        icon: '🟢',
        rules: [
          { label: 'Lloc on es va o on s\'és', example: '«Vas al mercat?» «Sí, hi vaig.» / «Hi sóc, a casa.»' },
          { label: 'Substitut de complement amb «en/a/amb»', example: '«Hi confio, en ell.» / «Hi estic d\'acord.»' },
          { label: '«Hi ha» (existència)', example: '«Hi ha molts participants.» (mai «Hay» sense hi!)' },
        ]
      },
      {
        title: 'Combinació de dos pronoms',
        icon: '📋',
        body: `<p>Quan dos pronoms febles van junts, l'ordre és fix: <strong>reflexiu/CI + CD/«en»/«hi»</strong>.</p>`,
        table: {
          headers: ['Combinació', 'Exemple', 'Nota'],
          rows: [
            ['me\'l, me la, me\'ls, me les', '«Me\'l dóna»', 'em + el → me\'l'],
            ['te\'l, te la, te\'ls, te les', '«Te la porto»', 'et + la → te la'],
            ['li\'l, li la, li\'ls, li les', '«Li\'ls envia»', 'li + els → li\'ls'],
            ['me\'n, te\'n, se\'n, ens-en, us-en', '«Me\'n vaig»', 'em + en → me\'n (fui de allí!)'],
            ['m\'hi, t\'hi, s\'hi, ens-hi, us-hi', '«M\'hi trobo bé»', 'em + hi → m\'hi'],
            ['li ho, els ho', '«Li ho explico»', 'li + ho (sense contracció)'],
          ]
        }
      },
      {
        title: 'Errors freqüents per interferència del castellà',
        icon: '⚠️',
        rules: [
          { bad: '«Se lo digo» → *Li ho dic (correcte, però no «se lo»)', good: 'Li ho dic. / Li ho explico.' },
          { bad: '«Hay muchos» → *Hi han molts', good: 'Hi ha molts participants. («hi ha» és invariable!)' },
          { bad: 'Omissió del «hi»: «Vaig demà» (per dir «hi vaig»)', good: 'Hi vaig demà. / Demà hi vaig.' },
          { bad: '«Se me olvidó» → *Se m\'ha oblidat', good: 'Se m\'ha oblidat. / Me n\'he oblidat.' },
        ]
      }
    ]
  },

  'Frases fetes': {
    level: 'c1',
    icon: '💬',
    subtitle: 'Unitats fraseològiques, col·locacions i expressions idiomàtiques',
    sections: [
      {
        title: 'Fraseologia: més que «expressions curioses»',
        icon: '📌',
        body: `<p>Les frases fetes (o unitats fraseològiques) inclouen locucions, refranys, col·locacions i expressions idiomàtiques. El seu significat no es dedueix de les paraules per separat. Dominar-les és una marca clara de competència avançada.</p>
               <p>Al C1, no n'hi ha prou amb saber-les: cal saber <strong>quan i com</strong> usar-les sense caure en el registre massa col·loquial en contextos formals.</p>`
      },
      {
        title: 'Locucions verbals freqüents',
        icon: '📋',
        table: {
          headers: ['Expressió', 'Significat', 'Exemple'],
          rows: [
            ['anar de bòlit', 'estar molt ocupat, sense temps', 'Aquesta setmana anem de bòlit amb el projecte.'],
            ['fer els ulls grossos', 'ignorar deliberadament una falta', 'El director hi va fer els ulls grossos.'],
            ['posar-se les piles', 'esforçar-se, activar-se', 'Ja és hora que et poses les piles.'],
            ['perdre el fil', 'perdre el seguiment d\'un raonament', 'He perdut el fil de l\'explicació.'],
            ['tenir molta barra', 'tenir molt de descaro', 'Té molta barra per demanar un augment ara.'],
            ['fer la viu-viu', 'viure sense treballar gaire', 'Sempre fa la viu-viu i els altres ho fan tot.'],
            ['estar a l\'aguait', 'estar atent, vigilant', 'Hem d\'estar a l\'aguait de qualsevol canvi.'],
            ['tirar la tovallola', 'rendir-se, abandonar', 'No és moment de tirar la tovallola.'],
          ]
        }
      },
      {
        title: 'Col·locacions lèxiques',
        icon: '🔗',
        body: `<p>Les col·locacions són combinacions de paraules que «sonen bé» per convencions de la llengua. Aprendre-les és essencial perquè sovint no coincideixen amb el castellà.</p>`,
        table: {
          headers: ['Verb', 'Col·locació correcta', 'Incorrecte (calc)'],
          rows: [
            ['fer', 'fer una pregunta', '*realitzar una pregunta'],
            ['prendre', 'prendre una decisió', '*agafar una decisió'],
            ['dur', 'dur a terme', '*llevar a terme'],
            ['tenir', 'tenir en compte', '*agafar en compte'],
            ['donar', 'donar les gràcies', 'ok en castellà: «dar las gracias»'],
            ['fer', 'fer cas', '*posar atenció'],
          ]
        }
      },
      {
        title: 'Refranys i expressions amb context',
        icon: '📚',
        examples: [
          { text: '«Qui no vulgui pols, que no vagi a l\'era.» → Qui vol fer alguna cosa ha d\'acceptar-ne les conseqüències.' },
          { text: '«Ja plourà!» → Expressió d\'indiferència o escepticisme davant una promesa o amenaça.' },
          { text: '«Estar entre l\'espasa i la paret.» → Estar en una situació difícil sense bona sortida.' },
          { text: '«Fer de tripas cor» → *calc castellà. En català: «fer de necessitat virtut» o «armar-se de coratge».' },
        ]
      },
      {
        title: 'Registre i adequació',
        icon: '⚖️',
        body: `<p>Moltes frases fetes pertanyen al registre col·loquial. Al C1 cal saber quan és adequat usar-les i quan cal substituir-les per expressions formals.</p>`,
        rules: [
          { label: 'Col·loquial', example: '«Anem de bòlit» → Formal: «Ens trobem en una situació de gran càrrega de treball».' },
          { label: 'Col·loquial', example: '«Tirar la tovallola» → Formal: «Abandonar el projecte» / «Renunciar a la iniciativa».' },
          { label: 'Admesa en tots els registres', example: '«Tenir en compte», «donar suport a», «fer referència a».' },
        ]
      }
    ]
  },

  'Derivació i flexió': {
    level: 'c1',
    icon: '🧬',
    subtitle: 'Morfologia derivativa i flexiva del català avançat',
    sections: [
      {
        title: 'Morfologia al C1: per què és important?',
        icon: '📌',
        body: `<p>Dominar la morfologia permet <strong>crear paraules noves</strong> a partir d\'elements coneguts (derivació) i <strong>adaptar-les al context gramatical</strong> (flexió). Al C1, errors morfològics en textos formals penalitzen molt.</p>
               <p>La derivació i la composició amplien el lèxic; la flexió correcta garanteix la concordança i el registre adequat.</p>`
      },
      {
        title: 'Prefixos productius en català',
        icon: '📊',
        table: {
          headers: ['Prefix', 'Significat', 'Exemples'],
          rows: [
            ['des-', 'negació, reversió', 'desfer, desconèixer, desacord, desmuntar'],
            ['re-', 'repetició, intensitat', 'refer, rellegir, reforçar, reorganitzar'],
            ['sub-', 'inferioritat, insuficiència', 'subestimar, subordinat, subconjunt'],
            ['pre-', 'anterioritat', 'preveure, predeterminar, precedent'],
            ['co-/con-', 'conjunció, participació', 'coautoria, coexistir, conviure, corresponsabilitat'],
            ['anti-', 'oposició', 'antidemocràtic, anticossos, antisocial'],
            ['inter-', 'entre, mutuament', 'intercanvi, interacció, interdisciplinari'],
            ['multi-', 'multiplicitat', 'multicultural, multidisciplinari, multilingüe'],
          ]
        }
      },
      {
        title: 'Sufixos nominals productius',
        icon: '📊',
        table: {
          headers: ['Sufix', 'Valor', 'Exemples'],
          rows: [
            ['-ció / -ió', 'acció o resultat', 'formació, aplicació, decisió, revisió'],
            ['-ment', 'acció (des de verb) / mode (des de adj.)', 'desenvolupament, tractament / ràpidament'],
            ['-tat / -itat', 'qualitat abstracta', 'llibertat, qualitat, complexitat, diversitat'],
            ['-isme', 'doctrina, tendència', 'catalanisme, feminisme, liberalisme'],
            ['-ista', 'adherent, professional', 'periodista, especialista, activista'],
            ['-dor/-dora', 'agent', 'investigador, gestora, coordinador'],
            ['-ble', 'possibilitat passiva', 'assolible, sostenible, inqüestionable'],
            ['-atge', 'col·lectiu, procés', 'aprenentatge, rodatge, personatge'],
          ]
        }
      },
      {
        title: 'Flexió verbal: irregularitats freqüents al C1',
        icon: '🔀',
        body: `<p>Al C1 és fonamental dominar les formes verbals irregulars, especialment en el subjuntiu i els temps de passat.</p>`,
        table: {
          headers: ['Infinitiu', 'Ind. present (1a sg)', 'Subj. present (1a sg)', 'Perf. perifràstic (1a sg)'],
          rows: [
            ['ser', 'sóc', 'sigui', 'vaig ser'],
            ['haver', 'he', 'hagi', 'vaig haver'],
            ['poder', 'puc', 'pugui', 'vaig poder'],
            ['voler', 'vull', 'vulgui', 'vaig voler'],
            ['saber', 'sé', 'sàpiga', 'vaig saber'],
            ['venir', 'vinc', 'vingui', 'vaig venir'],
            ['fer', 'faig', 'faci', 'vaig fer'],
            ['dir', 'dic', 'digui', 'vaig dir'],
          ]
        }
      },
      {
        title: 'Flexió nominal: gènere i nombre especials',
        icon: '📋',
        rules: [
          { label: 'Noms amb gènere no predictible', example: '«el mar / la mar» (ambdós); «el terra» (no «la terra» en sentit de sòl).' },
          { label: 'Plurals irregulars', example: '«el règim → els règims»; «el caràcter → els caràcters»; «la síntesi → les síntesis».' },
          { label: 'Substantius invariables en gènere', example: '«el/la cantant», «el/la testimoni», «el/la còmplice».' },
          { label: 'Adjectius amb formes especials', example: '«bo → bona → bons → bones» (però «bon» davant masc. sg.); «gran → gran → grans».' },
        ]
      },
      {
        title: 'Nominalitzacions: de verb a nom',
        icon: '✨',
        body: `<p>La nominalització (convertir verbs en noms) és una marca de registre acadèmic. Cal dominar-la per produir textos formals.</p>`,
        examples: [
          { text: '«analitzar» → «l\'anàlisi» / «la tasca d\'anàlisi»' },
          { text: '«implementar» → «la implementació» / «el desplegament de»' },
          { text: '«avaluar» → «l\'avaluació» / «el procés d\'avaluació»' },
          { text: '«Han decidit reduir costos» → «La decisió de reducció de costos implica...»' },
        ]
      }
    ]
  },

  'Temps verbals': {
    level: 'b2',
    icon: '⏱️',
    subtitle: 'Usos dels temps verbals del passat, present i futur',
    sections: [
      {
        title: 'El passat en català',
        icon: '📌',
        body: `<p>El català estàndard usa el <strong>passat perifràstic</strong> (vaig + infinitiu) per a accions passades acabades. El <strong>pretèrit perfet</strong> (he + participi) existeix però és menys freqüent en català central oral.</p>`
      },
      {
        title: 'Passat perifràstic vs. Imperfet',
        icon: '📊',
        table: {
          headers: ['Passat perifràstic', 'Imperfet', 'Ús'],
          rows: [
            ['Vaig menjar.', 'Menjava.', 'Acció puntual acabada vs. acció en curs/habitual'],
            ['Va trucar tres vegades.', 'Trucava cada dia.', 'Acció comptada/delimitada vs. hàbit'],
            ['Quan va entrar...', '...plorava (de fons)', 'Acció nova vs. acció de fons'],
          ]
        }
      },
      {
        title: 'Futur, condicional i plusquamperfet',
        icon: '📋',
        rules: [
          { label: 'Futur irregular', example: 'fer → faré, poder → podré, voler → voldré, saber → sabré, haver → hauré, ser → seré' },
          { label: 'Condicional irregular', example: 'fer → faria, poder → podria, voler → voldria, haver → hauria' },
          { label: 'Plusquamperfet', example: '«Havia acabat quan va arribar.» → havia/havies/havia/havíem/havíeu/havien + participi' },
        ]
      }
    ]
  },

  'Preposicions': {
    level: 'b2',
    icon: '🔧',
    subtitle: 'Usos de per/per a i altres preposicions catalanes',
    sections: [
      {
        title: 'Per vs. Per a',
        icon: '📊',
        table: {
          headers: ['Per', 'Per a'],
          rows: [
            ['Causa: «Ho dic per amor.»', 'Destinació: «Aquesta carta és per a tu.»'],
            ['Durada: «per una setmana»', 'Termini: «per a divendres»'],
            ['Mitjà: «per telèfon»', 'Opinió: «Per a mi, és clar.»'],
            ['A través de: «per la finestra»', 'Finalitat: «Estudio per a millorar.»'],
          ]
        }
      },
      {
        title: 'Règim preposicional de verbs freqüents',
        icon: '📋',
        rules: [
          { label: 'dependre de', example: '«Depèn de tu.» (no *dependre en)' },
          { label: 'quedar amb', example: '«Quedo amb ella demà.»' },
          { label: 'pensar en', example: '«Penso en tu.» / «Penso a fer-ho.» (infinitiu)' },
          { label: 'insistir a + inf.', example: '«Insisteix a venir.» (no *insistir en + inf.)' },
        ]
      },
      {
        title: 'Des de vs. De — A vs. En',
        icon: '📌',
        rules: [
          { label: 'Des de (origen temporal)', example: '«Treballo aquí des de fa tres anys.» → fins ara' },
          { label: 'De (procedència puntual)', example: '«Vinc de Barcelona.» → procedència, sense continuïtat' },
          { label: 'A (moviment / lloc fix)', example: '«Vaig a Barcelona.» / «Sóc a casa.» / «A classe.»' },
          { label: 'En (lloc abstracte/general)', example: '«Treballo en un hospital.» / «En reunió.»' },
        ]
      }
    ]
  },

  'Construccions comparatives': {
    level: 'b2',
    icon: '⚖️',
    subtitle: 'Comparatius d\'igualtat, superioritat, inferioritat i superlatius',
    sections: [
      {
        title: 'Tipus de comparatius',
        icon: '📊',
        table: {
          headers: ['Tipus', 'Estructura', 'Exemple'],
          rows: [
            ['Superioritat', 'més + adj./adv. + que', 'És més alt que el seu germà.'],
            ['Inferioritat', 'menys + adj./adv. + que', 'Parla menys fluïdament.'],
            ['Igualtat (adj./adv.)', 'tan + adj./adv. + com', 'És tan intel·ligent com diuen.'],
            ['Igualtat (verb/nom)', 'tant com / tanta/tants/tantes + nom + com', 'Treballa tant com pot.'],
          ]
        }
      },
      {
        title: 'Comparatius irregulars',
        icon: '📋',
        rules: [
          { label: 'bo → millor', example: '«És millor que l\'anterior.» (preferit en registre formal sobre «més bo»)' },
          { label: 'dolent → pitjor', example: '«El resultat és pitjor del que esperava.»' },
          { label: 'gran → major / més gran', example: '«El major repte...» (formal/abstracte) / «És més gran que jo» (mida/edat)' },
          { label: 'petit → menor / més petit', example: '«El menor dels mals.» / «És més petit que la seva germana.»' },
        ]
      },
      {
        title: 'Superlatiu absolut',
        icon: '✨',
        rules: [
          { label: 'Molt + adjectiu', example: '«És molt important.» — forma analítica (freqüent)' },
          { label: 'Adjectiu + -íssim', example: '«És importantíssim.» — forma sintètica (registre elevat)' },
          { label: 'Tan i tant', example: '«tan» davant adj./adv. / «tant/tanta/tants/tantes» davant nom o verb.' },
        ]
      }
    ]
  },

  'Estil indirecte': {
    level: 'c1',
    icon: '💬',
    subtitle: 'Transformar el discurs directe en indirecte',
    sections: [
      {
        title: 'Canvis de temps verbal',
        icon: '📊',
        table: {
          headers: ['Estil directe', 'Estil indirecte (verb en passat)'],
          rows: [
            ['Present: «Parlo»', 'Imperfet: ...que parlava'],
            ['Passat perifràstic: «Vaig parlar»', 'Plusquamperfet: ...que havia parlat'],
            ['Futur: «Parlaré»', 'Condicional: ...que parlaria'],
            ['Present de subj.: «Parli»', 'Imperfet de subj.: ...que parlés'],
            ['Imperatiu: «Parla!»', 'Que + subj. imperfet: ...que parlés'],
          ]
        }
      },
      {
        title: 'Canvis de pronoms i adverbis',
        icon: '📋',
        rules: [
          { label: 'Pronoms personals', example: '«jo» → ell/ella; «tu» → jo; «nosaltres» → ells/elles' },
          { label: 'Adverbis de temps', example: '«avui» → aquell dia; «demà» → l\'endemà; «ahir» → el dia anterior' },
          { label: 'Adverbis de lloc', example: '«aquí» → allà; «aquest» → aquell' },
        ]
      },
      {
        title: 'Marcadors introductors',
        icon: '📌',
        rules: [
          { label: 'Declarativa', example: '«dir que», «afirmar que», «explicar que», «comentar que»' },
          { label: 'Interrogativa', example: '«preguntar si» (sí/no) / «preguntar on/quan/com/per què»' },
          { label: 'Imperativa', example: '«demanar que», «ordenar que», «proposar que» + subj. imperfet' },
        ]
      }
    ]
  },

  'Passiva i impersonal': {
    level: 'c1',
    icon: '🔄',
    subtitle: 'Veu passiva, passiva reflexa i construccions impersonals',
    sections: [
      {
        title: 'Tres construccions passives/impersonals',
        icon: '📊',
        table: {
          headers: ['Construcció', 'Estructura', 'Exemple'],
          rows: [
            ['Passiva perifràstica', 'ser + participi (concordat)', 'El document va ser signat pel director.'],
            ['Passiva reflexa', 'es + verb (concorda amb CD)', 'Es van vendre molts llibres.'],
            ['Impersonal', 'es + verb (singular, sense subjecte)', 'Es parla de canvis. / No es pot aparcar.'],
          ]
        }
      },
      {
        title: 'Quan usar cada construcció',
        icon: '📋',
        rules: [
          { label: 'Perifràstica', example: 'Quan l\'agent és important: «Va ser aprovat pel consell.»' },
          { label: 'Reflexa', example: 'Quan l\'agent és irrellevant o desconegut: «Es van prendre mesures.»' },
          { label: 'Impersonal', example: 'Per a instruccions o normes generals: «S\'ha d\'entregar avui.»' },
        ]
      },
      {
        title: 'Preferència del català',
        icon: '📌',
        body: `<p>El català prefereix la passiva reflexa i les construccions impersonals sobre la passiva perifràstica, que és poc freqüent en registre oral i periodístic. En textos formals, la passiva perifràstica s'usa quan l'agent és rellevant.</p>`
      }
    ]
  },

};

/* ═══════════════════════════════════════════════════════════
   EXERCICIS (5+ per categoria)
═══════════════════════════════════════════════════════════ */
const DATA = {
  b2: [
    // CONNECTORS
    { id:'b2-con1', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector introdueix una conseqüència lògica?',
      text:'Va treballar molt dur durant tot l\'any. ___, va aconseguir el premi.',
      options:['Tanmateix','Per consegüent','Malgrat que','Sempre que'],
      correct:1, theory:'«Per consegüent», «per tant» i «és per això que» introdueixen el resultat d\'una causa anterior.', example:'No va estudiar; per tant, va suspendre.' },
    { id:'b2-con2', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector expressa una relació de causa?',
      text:'No va poder assistir ___ estava malalt de gravetat.',
      options:['per tant','ja que','tanmateix','a més'],
      correct:1, theory:'«Ja que», «atès que», «donat que» i «com que» expressen causa.', example:'No va venir, ja que tenia feina urgent.' },
    { id:'b2-con3', type:'fill', level:'b2', category:'Connectors',
      question:'Omple amb el connector d\'addició formal (no «també»):',
      sentence:'La mesura redueix costos. ___, millora l\'eficiència del sistema.',
      display:'connector d\'addició formal',
      answers:['a més','a més a més','així mateix','addicionalment'],
      theory:'En registre formal, «a més (a més)» o «així mateix» substitueixen el col·loquial «també».', example:'La proposta és viable; a més, compta amb el suport tècnic necessari.' },
    { id:'b2-con4', type:'reorder', level:'b2', category:'Connectors',
      question:'Ordena les frases perquè el text sigui lògicament coherent:',
      parts:['Per consegüent, es recomana adoptar mesures immediates.','En primer lloc, s\'ha detectat un augment del soroll urbà.','D\'altra banda, la qualitat de l\'aire ha empitjorat notablement.','Finalment, cal revisar la normativa vigent.'],
      correct:[1,2,0,3], theory:'Estructura: problema → dades → conseqüència → recomanació.', example:'En primer lloc... D\'altra banda... Per consegüent... Finalment...' },
    { id:'b2-con5', type:'reading', level:'b2', category:'Connectors',
      text:'L\'ús adequat dels connectors és fonamental en qualsevol text formal. Tanmateix, molts escriptors tendeixen a abusar dels connectors simples, com ara «però» o «i». Per consegüent, el resultat és un discurs que sembla poc elaborat, malgrat que el contingut pugui ser valuós.',
      question:'Quin problema principal identifica el text?',
      options:['Que els connectors no serveixen en textos formals','Que l\'ús repetitiu de connectors simples empobreix el discurs','Que cal evitar tots els connectors en registre formal'],
      correct:1, theory:'«Abusar dels connectors simples», «en detriment» i «poc elaborat» apunten a la resposta.', example:'Paraules clau: «tendeixen a abusar», «poc elaborat».' },
    { id:'b2-con6', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector introdueix una informació que contrasta amb l\'anterior?',
      text:'El projecte tenia molts punts forts. ___, presentava algunes mancances tècniques.',
      options:['Per tant','Ja que','Tanmateix','Addicionalment'],
      correct:2, theory:'«Tanmateix», «no obstant això» i «malgrat tot» introdueixen un contrast respecte al que s\'ha dit.', example:'El resultat va ser positiu; tanmateix, cal continuar treballant.' },

    // SUBJUNTIU
    { id:'b2-sub1', type:'fill', level:'b2', category:'Subjuntiu',
      question:'Omple amb la forma correcta del present de subjuntiu:',
      sentence:'Vull que tu ___ a temps a la reunió d\'avui.',
      display:'arribar (2a pers. sing.)', answers:['arribis'],
      theory:'Amb «vull que» el verb subordinat va en subjuntiu. Per a «tu», la terminació és -is.', example:'Espero que ell pugui venir avui.' },
    { id:'b2-sub2', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Quina frase usa el subjuntiu correctament?',
      options:['Dubto que ve demà.','Dubto que vindrà demà.','Dubto que vingui demà.','Dubto de que ve.'],
      correct:2, theory:'Amb «dubto que» s\'usa sempre el subjuntiu, perquè el dubte expressa una actitud no factual.', example:'Dubto que sigui possible acabar-ho avui.' },
    { id:'b2-sub3', type:'fill', level:'b2', category:'Subjuntiu',
      question:'Indicatiu o subjuntiu? Omple el buit:',
      sentence:'Sé que ella ___ molt bé el català des de petita.',
      display:'parlar (3a pers. sing.) — indicatiu o subjuntiu?', answers:['parla'],
      theory:'«Sé que» introdueix un fet cert → indicatiu. «Vull que parli» (desig) → subjuntiu.', example:'Sé que parla tres idiomes. / Vull que parli més a poc a poc.' },
    { id:'b2-sub4', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Tria la forma verbal correcta per a una subordinada temporal de futur:',
      text:'T\'ho explicaré quan ___ més temps disponible.',
      options:['tindré','tingui','tinc','tingués'],
      correct:1, theory:'Les oracions temporals de futur usen el present de subjuntiu (quan + subj.), mai el futur.', example:'Quan arribi, truqueu-me. / Ho farem quan puguem.' },
    { id:'b2-sub5', type:'fill', level:'b2', category:'Subjuntiu',
      sentence:'Cal que tots els participants ___ el formulari abans del divendres.',
      question:'Completa amb la forma de subjuntiu correcta:',
      display:'emplenar (3a pers. pl. present subj.)', answers:['emplenin','omplin'],
      theory:'«Cal que» exigeix subjuntiu. 3a pers. pl. del present de subj. en verbs -ar: -in.', example:'Cal que emplenin el formulari. / Cal que signin el document.' },
    { id:'b2-sub6', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Quina construcció és correcta amb «encara que» hipotètic?',
      options:['Encara que plourà, sortirem.','Encara que plou, sortirem.','Encara que plogui, sortirem.','Encara que plovent, sortirem.'],
      correct:2, theory:'«Encara que» amb valor hipotètic (la condició és incerta) va amb subjuntiu.', example:'Encara que plogui, sortirem. / Encara que plou (ja plou), sortim igualment.' },

    // COHESIÓ TEXTUAL
    { id:'b2-coh1', type:'reorder', level:'b2', category:'Cohesió textual',
      question:'Ordena les parts per formar un paràgraf coherent:',
      parts:['D\'altra banda, cal considerar els aspectes econòmics de la mesura.','En primer lloc, analitzarem els factors socials que hi intervenen.','Finalment, presentarem les nostres conclusions i recomanacions.','A continuació, veurem l\'impacte ambiental a curt i llarg termini.'],
      correct:[1,0,3,2], theory:'Un text ben estructurat segueix: introducció → arguments ordenats → conclusió.', example:'En primer lloc... A continuació... D\'altra banda... Finalment...' },
    { id:'b2-coh2', type:'choice', level:'b2', category:'Cohesió textual',
      question:'Quin mecanisme de cohesió usa la frase subratllada?',
      text:'La nova política mediambiental ha generat un ampli debat. <u>Aquesta mesura</u> ha rebut crítiques de nombrosos experts.',
      options:['El·lipsi del subjecte','Referència anafòrica amb sinònim','Connector de contrast','Referència catafòrica'],
      correct:1, theory:'«Aquesta mesura» és una referència anafòrica que reprèn «la nova política» per evitar la repetició.', example:'La reforma va ser aprovada. Aquesta decisió va generar polèmica.' },
    { id:'b2-coh3', type:'fill', level:'b2', category:'Cohesió textual',
      question:'Substitueix la repetició innecessària del subjecte per un mecanisme de cohesió:',
      sentence:'El director va presentar l\'informe, va respondre preguntes i ___ va marxar sense fer declaracions.',
      display:'connector temporal o el·lipsi',
      answers:['tot seguit','a continuació','posteriorment','finalment','seguidament'],
      theory:'En català el pronom subjecte s\'omet quan el context queda clar (el·lipsi). El connector temporal afegeix ordre.', example:'El director va parlar, va respondre preguntes i tot seguit va marxar.' },
    { id:'b2-coh4', type:'reorder', level:'b2', category:'Cohesió textual',
      question:'Ordena el paràgraf perquè sigui coherent:',
      parts:['Concretament, al sector tecnològic s\'han creat 10.000 llocs de treball nous.','En definitiva, les dades confirmen una tendència positiva per a l\'economia.','L\'any passat, el mercat laboral català va mostrar signes clars de recuperació.','Tanmateix, alguns sectors com el comerç minorista encara presenten dificultats.'],
      correct:[2,0,3,1], theory:'Estructura: idea general → especificació → matís → conclusió.', example:'Idea general → Detall → Objecció → Conclusió.' },
    { id:'b2-coh5', type:'reading', level:'b2', category:'Cohesió textual',
      text:'El canvi climàtic afecta tots els ecosistemes del planeta. Aquesta problemàtica requereix una resposta coordinada a escala global. Per consegüent, els governs han de col·laborar més estretament. Sense aquesta cooperació, els esforços individuals seran insuficients.',
      question:'Quina funció té «Sense aquesta cooperació» en l\'última frase?',
      options:['Introdueix un exemple de la cooperació descrita','Reprèn anafòricament «col·laboració» i enuncia el resultat negatiu de la seva absència','Contradiu la idea del paràgraf anterior'],
      correct:1, theory:'«Aquesta cooperació» és una referència anafòrica. «Sense +» planteja l\'escenari negatiu que reforça la recomanació.', example:'«Sense aquest suport, el projecte fracassarà.»' },
    { id:'b2-coh6', type:'choice', level:'b2', category:'Cohesió textual',
      question:'Quina opció fa un ús correcte de la referència pronominal?',
      options:['La directora va parlar. La directora va dir que la directora acceptava.','La directora va parlar. Va dir que acceptava la proposta.','La directora va parlar. Ella va dir que ella acceptava.'],
      correct:1, theory:'En català, el pronom subjecte s\'omet quan el context queda clar (el·lipsi). Repetir el nom o «ella» és redundant.', example:'Va parlar i va dir que acceptava. (El subjecte s\'entén pel context.)' },

    // COMPRENSIÓ LECTORA
    { id:'b2-com1', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'El transport públic de les grans ciutats s\'enfronta a reptes importants. D\'una banda, la demanda creixent de mobilitat sostenible; de l\'altra, la necessitat de modernitzar infraestructures antigues sense paralitzar el servei.',
      question:'Quin és el problema central que descriu el text?',
      options:['La manca de passatgers al transport públic','Adaptar el transport a les noves necessitats sense interrompre el servei','La contaminació causada pels autobusos urbans'],
      correct:1, theory:'Identifica la idea central buscant la tensió principal que el text descriu.', example:'Paraules clau: «reptes», «demanda creixent», «modernitzar», «sense paralitzar».' },
    { id:'b2-com2', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'Les biblioteques públiques han evolucionat molt més enllà del seu rol tradicional. Avui són espais de formació, inclusió digital i cohesió social. Malgrat les retallades pressupostàries dels darrers anys, moltes d\'elles han ampliat els seus serveis i han incrementat el nombre de visitants.',
      question:'Quin element del text contradiu una expectativa lògica?',
      options:['Que les biblioteques tinguin menys llibres','Que hagin augmentat visitants malgrat les retallades','Que les biblioteques ofereixin formació digital'],
      correct:1, theory:'«Malgrat» introdueix una paradoxa: la reducció de pressupost hauria d\'implicar menys serveis, però el resultat és el contrari.', example:'«Malgrat» = hi ha un obstacle que no impedeix el resultat esperat.' },
    { id:'b2-com3', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'La dieta mediterrània s\'associa sovint amb un estil de vida saludable. No obstant això, estudis recents matisen que no és la dieta en si mateixa, sinó el conjunt d\'hàbits que l\'acompanyen allò que explica els seus beneficis.',
      question:'Quina és la tesi principal del text?',
      options:['La dieta mediterrània no és saludable','Els beneficis s\'expliquen pel context de vida global, no per la dieta sola','Cal fer més estudis sobre la dieta mediterrània'],
      correct:1, theory:'El connector «no obstant això» i l\'estructura «no... sinó...» marquen la tesi real.', example:'Busca el verb principal de la frase introduïda per «sinó».' },
    { id:'b2-com4', type:'choice', level:'b2', category:'Comprensió lectora',
      question:'Quin to predomina en: «Sembla que la solució és evident; ara bé, cal ser prudents i analitzar totes les variables»?',
      options:['Afirmatiu i optimista sense reserves','Prudent i matisat','Negatiu i pessimista'],
      correct:1, theory:'«Sembla que» relativitza, i «ara bé» frena l\'entusiasme. El to global és de cautela reflexiva.', example:'Paraules com «sembla», «ara bé», «cal ser prudents» → to matisat.' },
    { id:'b2-com5', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'L\'abandonament escolar prematur continua sent un dels principals reptes. Les causes són múltiples: factors econòmics familiars, manca de motivació i metodologies docents poc adaptades. Per abordar-lo eficaçment, cal actuar de manera transversal.',
      question:'Quina afirmació és correcta d\'acord amb el text?',
      options:['L\'abandonament escolar té una sola causa principal','Hi ha diverses causes i cal una resposta multidimensional','El problema ja s\'ha resolt amb les noves metodologies'],
      correct:1, theory:'«Causes són múltiples» i «actuar de manera transversal» apunten a la resposta.', example:'«Múltiples» → no hi ha una sola causa. «Transversal» → resposta diversa.' },

    // PRODUCCIÓ ESCRITA
    { id:'b2-pro1', type:'writing', level:'b2', category:'Producció escrita',
      question:'Escriu una frase que expressi una condició real (si + present indicatiu + futur simple):',
      keywords:['si','treball diari','progrés'],
      sample:'Si treballes cada dia, progressaràs molt més ràpidament en la llengua.',
      theory:'Condicionals reals: si + present indicatiu + futur simple.', example:'Si estudies cada dia, aprovaràs l\'examen.' },
    { id:'b2-pro2', type:'writing', level:'b2', category:'Producció escrita',
      question:'Reformula en registre formal substituint els elements informals:',
      keywords:['«dir» → afirmar/manifestar','«molt» → considerablement/notablement','«coses» → aspectes/qüestions'],
      sample:'El portaveu va manifestar que la situació havia millorat considerablement en tots els aspectes clau.',
      theory:'Registre formal: verbs genèrics → precisos; adverbis col·loquials → cultes; «coses» → substantius específics.', example:'«dir» → «manifestar» / «molt» → «notablement» / «coses» → «qüestions».' },
    { id:'b2-pro3', type:'writing', level:'b2', category:'Producció escrita',
      question:'Escriu un paràgraf de 3 frases sobre les xarxes socials. Ha d\'incloure un connector de causa, un de contrast i un de conclusió.',
      keywords:['causa: ja que / perquè','contrast: tanmateix / tot i que','conclusió: per tant / en definitiva'],
      sample:'Les xarxes socials han transformat la comunicació, ja que permeten connectar persones de tot el món. Tanmateix, l\'ús excessiu pot generar addicció digital. Per tant, cal promoure un ús conscient d\'aquestes plataformes.',
      theory:'Un bon paràgraf B2 usa connectors variats: causa, contrast i conclusió estructuren l\'argument.', example:'Afirmació + ja que... → Tanmateix... → Per tant...' },
    { id:'b2-pro4', type:'choice', level:'b2', category:'Producció escrita',
      question:'Quina estructura és la més adequada per a l\'inici d\'una carta formal?',
      options:['Hola! T\'escric perquè tinc un problema...','Em plau adreçar-me a vostè en relació amb...','Mira, vull parlar-te d\'una cosa important...'],
      correct:1, theory:'Les cartes formals s\'inicien amb fórmules protocol·làries: «Em plau adreçar-me a vostè», «Em poso en contacte amb vostè per»...', example:'Em plau adreçar-me a vostè en relació amb la sol·licitud presentada el dia 10.' },
    { id:'b2-pro5', type:'writing', level:'b2', category:'Producció escrita',
      question:'Escriu una oració que expressi una condició hipotètica impossible en el present (subjuntiu imperfet):',
      keywords:['si + subjuntiu imperfet','condicional','situació impossible ara'],
      sample:'Si fos més jove, estudiaria una carrera completament diferent.',
      theory:'Condicionals hipotètiques irrels: si + imperfet de subjuntiu + condicional simple.', example:'Si tingués temps, aprendria a tocar el piano.' },
    { id:'b2-pro6', type:'choice', level:'b2', category:'Producció escrita',
      question:'Quina conclusió és la més adequada per a un text formal d\'opinió?',
      options:['Bueno, per acabar, crec que és molt important.','En definitiva, les evidències presentades posen de manifest la necessitat d\'una actuació immediata.','I ja està, bàsicament això és tot el que volia dir.'],
      correct:1, theory:'Una conclusió formal usa connectors de síntesi («en definitiva», «per concloure») i reprèn la tesi de manera elevada.', example:'En definitiva, cal adoptar un enfocament integral que abasti tots els aspectes de la qüestió.' },

    // LÈXIC FORMAL
    { id:'b2-lex1', type:'choice', level:'b2', category:'Lèxic formal',
      question:'Quin verb és el més adequat en un context formal?',
      text:'En el seu discurs, la directora va ___ que les mesures entrarien en vigor immediatament.',
      options:['dir','anunciar','comentar','explicar-li'],
      correct:1, theory:'En registres formals cal usar verbs precisos: «afirmar», «manifestar», «anunciar» en lloc del genèric «dir».', example:'La ministra va anunciar noves mesures fiscals per al proper exercici.' },
    { id:'b2-lex2', type:'choice', level:'b2', category:'Lèxic formal',
      question:'Quin sinònim és el més precís per a «tenir» en un context institucional?',
      text:'El departament ___ tots els recursos necessaris per dur a terme el projecte.',
      options:['té','disposa de','agafa','porta'],
      correct:1, theory:'«Disposar de» és la forma formal equivalent a «tenir» quan es parla de recursos o capacitats institucionals.', example:'L\'organisme disposa de personal qualificat i equipament modern.' },
    { id:'b2-lex3', type:'fill', level:'b2', category:'Lèxic formal',
      question:'Substitueix «coses» per un substantiu precís:',
      sentence:'El ministre va parlar de moltes ___ importants durant la conferència.',
      display:'substantiu precís (no «coses»)',
      answers:['qüestions','aspectes','temes','punts','elements'],
      theory:'«Cosa» és el substantiu genèric per excel·lència. Substitueix-lo per «qüestió», «aspecte», «element» o «factor» segons el context.', example:'El ministre va abordar qüestions fonamentals per al futur del sector.' },
    { id:'b2-lex4', type:'choice', level:'b2', category:'Lèxic formal',
      question:'Quina expressió és un calc del castellà que cal evitar en català formal?',
      options:['a partir de','a nivell de','quant a','pel que fa a'],
      correct:1, theory:'«A nivell de» és un calc de «a nivel de». En català: «quant a», «pel que fa a», «en matèria de», «en l\'àmbit de».', example:'✗ A nivell econòmic → ✓ Quant a l\'economia.' },
    { id:'b2-lex5', type:'fill', level:'b2', category:'Lèxic formal',
      question:'Tria el verb precís per completar la frase formal:',
      sentence:'Les autoritats van ___ les mesures de seguretat davant el risc d\'inundació.',
      display:'verb formal precís (no «fer» ni «posar»)',
      answers:['reforçar','endurir','implementar','intensificar','activar'],
      theory:'En contextos de seguretat i gestió, verbs com «reforçar», «implementar», «activar» aporten precisió al discurs formal.', example:'Les autoritats van activar el protocol d\'emergència davant la situació.' },
    { id:'b2-lex6', type:'reorder', level:'b2', category:'Lèxic formal',
      question:'Ordena les paraules per formar una frase formal i ben construïda:',
      parts:['un increment notable','es constata','de temperatura global','en les darreres dècades'],
      correct:[1,0,2,3], theory:'Frases nominals formals: verb impersonal (passiva reflexa) + sintagma nominal complex. «Es constata» és marca de registre acadèmic.', example:'Es constata un increment notable de la temperatura global en les darreres dècades.' },

    // INTERFERÈNCIES
    { id:'b2-int1', type:'fill', level:'b2', category:'Interferències',
      question:'Substitueix el calc del castellà pel verb català correcte:',
      sentence:'Vaig ___ compte que havia oblidat les claus a casa.',
      display:'verb català: ___-se (no «donar-se compte»)',
      answers:['adonar','adonar-me','adonar-me\'n'],
      theory:'«Donar-se compte» és un calc de «darse cuenta». La forma correcta en català és «adonar-se (de)».', example:'Em vaig adonar que havia oblidat les claus.' },
    { id:'b2-int2', type:'choice', level:'b2', category:'Interferències',
      question:'Quina frase és correcta en català?',
      options:['Ho vaig fer en base a les teves instruccions.','Ho vaig fer basant-me en les teves instruccions.','Ho vaig realitzar a base de seguir les instruccions.'],
      correct:1, theory:'«En base a» és un calc del castellà. La forma catalana correcta és «basant-se en», «a partir de» o «d\'acord amb».', example:'✗ En base a les dades. ✓ A partir de les dades disponibles.' },
    { id:'b2-int3', type:'fill', level:'b2', category:'Interferències',
      question:'Substitueix «realizar» pel verb català adequat:',
      sentence:'Van ___ una investigació exhaustiva sobre l\'origen del problema.',
      display:'verb català correcte (no «realitzar»)',
      answers:['fer','dur a terme','efectuar','portar a terme'],
      theory:'«Realitzar» és sovint un calc innecessari. La forma preferida és «fer», «dur a terme» o «efectuar».', example:'Van dur a terme una investigació exhaustiva.' },
    { id:'b2-int4', type:'choice', level:'b2', category:'Interferències',
      question:'Quin ús del gerundi és incorrecte en català?',
      options:['Caminant pel parc, va pensar en ella. (simultani)','Va acabar la reunió, enviant l\'acta tot seguit. (posterior)','Essent una qüestió complexa, cal analitzar-la. (explicatiu)'],
      correct:1, theory:'El gerundi de posterioritat (acció POSTERIOR a la principal) és un calc del castellà. Cal usar coordinades: «Va acabar la reunió i tot seguit envià l\'acta».', example:'✗ Va acabar el treball, enviant-lo. ✓ Va acabar el treball i l\'envià per correu.' },
    { id:'b2-int5', type:'fill', level:'b2', category:'Interferències',
      question:'Substitueix «lo important» per la construcció catalana correcta:',
      sentence:'___ és que tothom participi activament en la presa de decisions.',
      display:'construcció sense «lo» (inexistent en català)',
      answers:['allò important','el que és important','la cosa important'],
      theory:'El català no té article neutre «lo». S\'usa «allò» (davant adj.) o «el que» (davant verb). «Lo» és sempre un calc del castellà.', example:'✗ Lo millor és descansar. ✓ Allò millor és descansar.' },
    { id:'b2-int6', type:'choice', level:'b2', category:'Interferències',
      question:'Quina és la forma correcta en català?',
      options:['donar-se compte','adonar-se','realitzar-se','enterar-se'],
      correct:1, theory:'«Adonar-se» és el verb propi del català. «Donar-se compte» i «enterar-se» (en el sentit d\'assabentar-se) són calcs.', example:'Em vaig adonar de l\'error en el darrer moment.' },

    // PERÍFRASIS VERBALS
    { id:'b2-per1', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa una obligació impersonal?',
      text:'___ presentar la documentació original abans del dia 15.',
      options:['Es pot','Cal','Solia','Acabava de'],
      correct:1, theory:'«Cal + infinitiu» expressa necessitat o obligació impersonal. Equivalents: «és necessari + inf.», «s\'ha de + inf.».', example:'Cal lliurar el treball abans del termini establert.' },
    { id:'b2-per2', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que una acció acaba de passar?',
      text:'___ signar el contracte, de manera que encara ets a temps per revisar-lo.',
      options:['Han de','Acaben de','Solen','Tornen a'],
      correct:1, theory:'«Acabar de + infinitiu» expressa una acció molt recent (aspecte perfectiu immediat).', example:'Acabo d\'arribar. / Acabes de dir una cosa molt interessant.' },
    { id:'b2-per3', type:'fill', level:'b2', category:'Perífrasis verbals',
      question:'Omple amb la perífrasi adequada per expressar repetició:',
      sentence:'Ja ha comès aquest error dues vegades. Si ___ cometre\'l, haurà de rebre formació addicional.',
      display:'perífrasi de repetició (+ infinitiu)',
      answers:['torna a','vol tornar a'],
      theory:'«Tornar a + infinitiu» expressa la repetició d\'una acció. Equivalent a «una altra vegada + verb».', example:'Ha tornat a arribar tard. / Si torna a fallar, caldrà prendre mesures.' },
    { id:'b2-per4', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que una acció estava en curs en el passat?',
      text:'Quan va sonar el telèfon, ___ la presentació per a la reunió.',
      options:['havia acabat','estava preparant','va preparar','prepararia'],
      correct:1, theory:'«Estar + gerundi» en imperfet expressa una acció en curs que es veu interrompuda (aspecte progressiu del passat).', example:'Estava escrivint l\'informe quan va arribar la notícia.' },
    { id:'b2-per5', type:'fill', level:'b2', category:'Perífrasis verbals',
      question:'Usa la perífrasi correcta per expressar la cessació d\'un hàbit:',
      sentence:'Fa tres anys que ___ fumar gràcies al programa de deshabituació.',
      display:'perífrasi de cessament (+ infinitiu)',
      answers:['va deixar de','ha deixat de','deixar de'],
      theory:'«Deixar de + infinitiu» expressa la interrupció d\'un hàbit. Diferent de «parar de» (interrupció temporal).', example:'Ha deixat de menjar carn des de fa uns mesos.' },
    { id:'b2-per6', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que alguna cosa passarà immediatament?',
      text:'Espera, ___ sortir. No marxis encara.',
      options:['acabo de','vaig a','solia','haig de'],
      correct:1, theory:'«Anar a + infinitiu» expressa un futur immediat o una acció a punt de produir-se.', example:'Vés preparant-te, que anem a sortir.' },

    // TEMPS VERBALS
    { id:'b2-tv1', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina forma verbal expressa una acció puntual i acabada en el passat?',
      text:'Ahir ___ al cinema amb els meus amics.',
      options:['anava','vaig anar','he anat','hagués anat'],
      correct:1, theory:'El passat perifràstic (vaig + infinitiu) expressa accions passades puntuals i acabades. L\'imperfet «anava» indicaria un hàbit o acció de fons en curs.', example:'Vaig trucar tres vegades però no va respondre.' },
    { id:'b2-tv2', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quin temps verbal s\'usa per a una acció habitual en el passat?',
      text:'De petit, ___ a la platja cada estiu amb la família.',
      options:['vaig anar','havia anat','anava','aniré'],
      correct:2, theory:'L\'imperfet expressa hàbits, accions repetides o estats en el passat. «Cada estiu» indica repetició habitual → imperfet.', example:'Quan era jove, estudiava fins a les dotze cada nit.' },
    { id:'b2-tv3', type:'fill', level:'b2', category:'Temps verbals',
      question:'Completa amb la forma correcta del passat perifràstic:',
      sentence:'Quan el professor ___ a classe, tots els alumnes s\'aixecaren.',
      display:'entrar (3a pers. sing. passat perifràstic)', answers:['va entrar'],
      theory:'Passat perifràstic: anar conjugat (vaig/vas/va/vam/vau/van) + infinitiu. 3a pers. sing.: «va» + infinitiu.', example:'Va entrar sense trucar. / Vas dir la veritat?' },
    { id:'b2-tv4', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina oració usa correctament el plusquamperfet?',
      options:['Quan va arribar, ja vam menjar.','Quan va arribar, ja havíem menjat.','Quan va arribar, ja mengem.'],
      correct:1, theory:'El plusquamperfet (havia + participi) expressa una acció passada anterior a una altra acció passada. «Ja havíem menjat» és anterior a «va arribar».', example:'Quan va trucar, ja havia sortit. / L\'informe que havia escrit era excel·lent.' },
    { id:'b2-tv5', type:'fill', level:'b2', category:'Temps verbals',
      question:'Omple amb el futur simple del verb indicat:',
      sentence:'Si el temps ho permet, ___ una excursió diumenge.',
      display:'fer (1a pers. pl. futur simple)', answers:['farem'],
      theory:'El futur simple de «fer» és irregular: faré, faràs, farà, farem, fareu, faran. Altres irregulars: poder → podré, voler → voldré, saber → sabré.', example:'Demà faré el sopar jo. / Quan acabi, t\'ho diré.' },
    { id:'b2-tv6', type:'reading', level:'b2', category:'Temps verbals',
      text:'De jove, la Maria escrivia en el seu diari cada nit. Un dia, però, va perdre el quadern i mai més va tornar a agafar el costum. Ara diu que escriurà les seves memòries quan es jubili.',
      question:'Quina funció té cada temps verbal del text?',
      options:['Un sol temps per a totes les accions passades','Imperfet per a hàbits, perifràstic per a accions puntuals, futur per a plans futurs','Perifràstic per a tot el passat i futur per al futur'],
      correct:1, theory:'«Escrivia» (hàbit), «va perdre / va tornar» (accions puntuals), «escriurà» (futur). Cada temps té una funció aspectual específica.', example:'Imperfet → hàbit/fons / Perifràstic → puntual / Futur → prospectiu.' },
    { id:'b2-tv7', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina forma del condicional és correcta?',
      text:'Si tingués més temps, ___ al gimnàs cada dia.',
      options:['anava','aniré','aniria','anés'],
      correct:2, theory:'En condicionals hipotètiques (si + imperfet subj.), el resultat va en condicional simple: -ia. «Aniria» = condicional d\'«anar».', example:'Si pogués, ho faria de seguida. / Ho compraria si fos més barat.' },

    // PREPOSICIONS
    { id:'b2-prep1', type:'choice', level:'b2', category:'Preposicions',
      question:'Tria la preposició correcta:',
      text:'Aquesta documentació és ___ el departament de recursos humans.',
      options:['per','per a','a','de'],
      correct:1, theory:'«Per a» indica destinació o destinatari. «Per» indica causa, durada o mitjà. La documentació «és per a» (destinada a) el departament.', example:'Aquesta carta és per a tu. / Ho faig per amor (causa).' },
    { id:'b2-prep2', type:'fill', level:'b2', category:'Preposicions',
      question:'Omple amb «per» o «per a»:',
      sentence:'Haurem d\'entregar el projecte ___ la setmana que ve.',
      display:'«per» o «per a» (termini de temps)', answers:['per a'],
      theory:'Termini (data límit) → «per a»: «per a divendres», «per a la setmana que ve». Durada → «per»: «estaré fora per dues setmanes».', example:'Ho necessito per a demà. / Estaré fora per dues setmanes.' },
    { id:'b2-prep3', type:'choice', level:'b2', category:'Preposicions',
      question:'Quin verb porta la preposició «en»?',
      options:['Consisteix ___ tres fases.','Depèn ___ nosaltres.','Insisteix ___ venir.'],
      correct:0, theory:'«Consistir en» és el règim fix. «Dependre de» (no «dependre en»). «Insistir a + infinitiu» (no «insistir en + infinitiu» amb persones).', example:'El projecte consisteix en tres etapes. / Insisteix a participar.' },
    { id:'b2-prep4', type:'fill', level:'b2', category:'Preposicions',
      question:'Tria la preposició correcta per al verb «quedar»:',
      sentence:'He quedat ___ la Núria per dinar avui.',
      display:'preposició de companyia (quedar amb algú)', answers:['amb'],
      theory:'«Quedar amb» algú = quedar per trobar-se (companyia). «Amb» expressa companyia o instrument.', example:'Quedo amb ella a les dues. / Ho escriu amb llapis.' },
    { id:'b2-prep5', type:'choice', level:'b2', category:'Preposicions',
      question:'Quina frase usa correctament «des de»?',
      options:['Treballo aquí des de fa tres anys.','Treballo aquí de fa tres anys.','Treballo aquí desde tres anys.'],
      correct:0, theory:'«Des de» expressa l\'origen en el temps fins al present: «des de fa tres anys». «De» indica procedència puntual. «Desde» és la forma castellana.', example:'Visc aquí des de fa cinc anys. / Vinc de Barcelona.' },
    { id:'b2-prep6', type:'fill', level:'b2', category:'Preposicions',
      question:'Completa amb «a» o «en»:',
      sentence:'Ara no pot atendre\'t, és ___ reunió.',
      display:'«a» o «en» (situació/context)', answers:['en','en reunió'],
      theory:'«En reunió», «en formació», «en pràctiques» → contextos abstractes o situations sense article. «A» + lloc físic concret: «a l\'oficina», «a classe».', example:'Estic en reunió. / Vaig a la reunió. / Treballo a casa.' },
    { id:'b2-prep7', type:'choice', level:'b2', category:'Preposicions',
      question:'Per a quin cas s\'usa «per» (i no «per a»)?',
      options:['Indicar el destinatari d\'un regal','Indicar la causa d\'una acció','Indicar un termini de lliurament'],
      correct:1, theory:'«Per» indica causa («ho dic per amor»), mitjà («per correu»), durada («per un mes») i «a través de» («per la finestra»). «Per a» indica destinació, finalitat i termini.', example:'Ho faig per tu (causa: amor). / Ho faig per a tu (destinació: t\'ho done).' },

    // CONSTRUCCIONS COMPARATIVES
    { id:'b2-cmp1', type:'fill', level:'b2', category:'Construccions comparatives',
      question:'Omple amb la forma d\'igualtat correcta:',
      sentence:'Aquesta proposta és ___ bona ___ l\'anterior.',
      display:'tan ... com (igualtat amb adjectiu)', answers:['tan','com'],
      theory:'Igualtat amb adjectiu o adverbi: «tan + adj./adv. + com». No «igual de» ni «tanto» en català formal.', example:'És tan ràpid com el vent. / Parla tan bé com la seva professora.' },
    { id:'b2-cmp2', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quina forma comparativa és correcta?',
      options:['Aquest mètode és más eficient que l\'altre.','Aquest mètode és més eficient que l\'altre.','Aquest mètode és major d\'eficient que l\'altre.'],
      correct:1, theory:'Superioritat: «més + adj. + que». «Más» és castellà. «Major» és comparatiu irregular de «gran», no aplicable a tots els adjectius.', example:'És més clar que la versió anterior. / Parla més lentament.' },
    { id:'b2-cmp3', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quin és el comparatiu de superioritat correcte de «bo»?',
      options:['més bo','millor','major'],
      correct:1, theory:'«Bo» té comparatiu irregular: «millor». En registre formal s\'evita «més bo» (col·loquial). «Major» és comparatiu de «gran» (en sentit abstracte o formal).', example:'Aquesta opció és millor que la primera. / El millor resultat possible.' },
    { id:'b2-cmp4', type:'fill', level:'b2', category:'Construccions comparatives',
      question:'Completa amb «tant» o «tan»:',
      sentence:'No havia vist mai ___ gent junta en un mateix lloc.',
      display:'tant/tanta/tants/tantes davant nom', answers:['tanta'],
      theory:'Davant de nom: «tant/tanta/tants/tantes + nom» (concorda en gènere i nombre). Davant d\'adjectiu o adverbi: «tan + adj./adv.».', example:'Tanta gent! / Tants problemes! / Tan aviat! / Tan bé!' },
    { id:'b2-cmp5', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quin superlatiu absolut és correcte en registre formal?',
      options:['És importantíssim.','És la cosa más important.','És molt millor.'],
      correct:0, theory:'Superlatiu absolut sintètic: adj. + -íssim (registre elevat). «Más» és castellà. «Molt millor» és un doble comparatiu (ja que «millor» ja és comparatiu); millor dir «molt bo» o simplement «millor».', example:'Un resultat excel·lentíssim. / Un text claríssim.' },
    { id:'b2-cmp6', type:'reading', level:'b2', category:'Construccions comparatives',
      text:'El nou sistema és menys complex que l\'anterior, però no tan intuïtiu com esperàvem. Tot i que el rendiment és millor, la interfície resulta pitjor pel que fa a l\'ergonomia. En definitiva, cap dels dos és perfecte.',
      question:'Quants tipus de comparació s\'usen al text?',
      options:['Només superioritat','Inferioritat, igualtat i comparatius irregulars (millor/pitjor)','Només igualtat i superioritat regular'],
      correct:1, theory:'«menys complex» (inferioritat), «tan intuïtiu com» (igualtat), «millor» i «pitjor» (superioritat/inferioritat irregulars de bo/dolent).', example:'Identifica cada estructura comparativa i el seu tipus.' },

  ],

  c1: [
    // SUBJUNTIU AVANÇAT
    { id:'c1-sa1', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Tria la forma correcta per a una condició hipotètica irreal en el present:',
      text:'Si jo ___ president, canviaria moltes coses urgentment.',
      options:['sóc','fos','sigui','havia estat'],
      correct:1, theory:'Condicionals hipotètiques irrels: si + imperfet de subjuntiu + condicional simple.', example:'Si tingués més temps, aprendria japonès.' },
    { id:'c1-sa2', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Tria la forma correcta per a una condicional irreal en el passat:',
      text:'Si ___ estudiat més, hauria aprovat l\'examen sense problemes.',
      options:['havia','hagués','hauria','hagi'],
      correct:1, theory:'Condicionals irreals en el passat: si + plusquamperfet de subjuntiu (hagués + participi) + condicional compost.', example:'Si hagués vingut a temps, hauria pogut saludar-te.' },
    { id:'c1-sa3', type:'fill', level:'c1', category:'Subjuntiu avançat',
      question:'Completa la frase temporal de futur amb la forma verbal correcta:',
      sentence:'Enviarem la proposta definitiva quan ___ totes les esmenes incorporades.',
      display:'tenir (1a pers. pl. present subj.)', answers:['tinguem'],
      theory:'Les oracions temporals de futur porten sempre present de subjuntiu: «quan + subj.».', example:'Ho faré quan tingui temps. / Sortirem quan acabi la reunió.' },
    { id:'c1-sa4', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Quina frase usa el subjuntiu correctament en una oració relativa?',
      options:['Busco un col·laborador que sap moltes llengues.','Busco un col·laborador que sàpiga moltes llengues.','Busco un col·laborador que sabrà moltes llengues.'],
      correct:1, theory:'Quan l\'antecedent del relatiu és indefinit (no se sap si existeix), el verb de la subordinada va en subjuntiu.', example:'Busco algú que parli japonès. (subj.) / Conec algú que parla japonès. (ind.)' },
    { id:'c1-sa5', type:'fill', level:'c1', category:'Subjuntiu avançat',
      question:'Completa amb la forma de subjuntiu correcta per a un desig hipotètic:',
      sentence:'Tant de bo ___ possible que tothom visqués en pau!',
      display:'ser (imperfet subj. 3a pers. sing.)', answers:['fos','sigui'],
      theory:'«Tant de bo» amb imperfet de subjuntiu: desig difícil o impossible. Amb present: desig possible.', example:'Tant de bo pugui venir! (possible) / Tant de bo pogués volar! (impossible)' },
    { id:'c1-sa6', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Quina és la forma correcta amb «per bé que» en registre formal?',
      text:'___ els resultats siguin positius, cal continuar vigilant l\'evolució.',
      options:['Malgrat que','Per bé que','Ja que','Per tant'],
      correct:1, theory:'«Per bé que» és un connector concessiu formal que sempre va seguit de subjuntiu. Propi del registre escrit acurat.', example:'Per bé que els indicadors millorin, no hem de relaxar la vigilància.' },

    // CONNECTORS CONCESSIUS
    { id:'c1-cc1', type:'fill', level:'c1', category:'Connectors concessius',
      question:'Omple amb el connector concessiu adequat davant un sintagma nominal:',
      sentence:'___ les dificultats tècniques considerables, l\'equip va assolir tots els objectius.',
      display:'connector concessiu + sintagma nominal (sense verb conjugat)',
      answers:['malgrat','tot i','malgrat les','tot i les'],
      theory:'«Malgrat» i «tot i» van seguits de nom, pronom o infinitiu. «Malgrat que» i «tot i que» van seguits de verb conjugat.', example:'Malgrat la pluja, vam sortir. / Tot i ploure, vam sortir.' },
    { id:'c1-cc2', type:'choice', level:'c1', category:'Connectors concessius',
      question:'Quin connector concessiu va obligatòriament amb subjuntiu?',
      options:['si bé','per bé que','tot i que','malgrat que'],
      correct:1, theory:'«Per bé que» és el connector concessiu formal que exigeix sempre subjuntiu. «Si bé» porta indicatiu.', example:'Per bé que els resultats siguin positius, cal prudència.' },
    { id:'c1-cc3', type:'fill', level:'c1', category:'Connectors concessius',
      question:'Omple amb el connector concessiu més formal per a registre acadèmic + indicatiu:',
      sentence:'___ les mesures adoptades han estat insuficients, representen un primer pas en la bona direcció.',
      display:'connector concessiu formal + indicatiu',
      answers:['si bé','tot i que','malgrat que','encara que'],
      theory:'«Si bé» és el connector concessiu més marcat com a formal i acadèmic. Va amb indicatiu.', example:'Si bé els resultats milloren, la situació continua sent preocupant.' },
    { id:'c1-cc4', type:'reorder', level:'c1', category:'Connectors concessius',
      question:'Ordena per formar una frase concessiva ben construïda:',
      parts:['el projecte va ser un èxit notable','malgrat les nombroses dificultats inicials','i va superar totes les expectatives del comitè'],
      correct:[1,0,2], theory:'Estructura: connector concessiu + obstacle → acció principal + resultat positiu malgrat tot.', example:'Malgrat les dificultats → el projecte va ser un èxit → i va superar les expectatives.' },
    { id:'c1-cc5', type:'reading', level:'c1', category:'Connectors concessius',
      text:'Tot i que el cost inicial de les energies renovables era elevat, la seva implantació s\'ha accelerat. Per bé que alguns sectors continuïn resistint-se a la transició, les dades indiquen que el punt de no retorn ja s\'ha superat. Malgrat tot, la velocitat del canvi continua sent insuficient.',
      question:'Quina funció comparteixen «tot i que», «per bé que» i «malgrat tot» en el text?',
      options:['Introduir causes de la situació','Expressar obstacles que no impedeixen el resultat principal','Donar ordre cronològic als esdeveniments'],
      correct:1, theory:'Els tres connectors són concessius: introdueixen un obstacle que no impedeix la conclusió principal.', example:'Tot i que [obstacle]... [la situació continua].' },
    { id:'c1-cc6', type:'choice', level:'c1', category:'Connectors concessius',
      question:'En quina frase s\'usa incorrectament un connector concessiu?',
      options:['Malgrat la crisi, l\'empresa va créixer.','Tot i ploure molt, van sortir a caminar.','Per bé que és un bon professional, treballarà amb nosaltres.'],
      correct:2, theory:'«Per bé que» exigeix subjuntiu. «És» (indicatiu) és incorrecte. La forma correcta: «per bé que sigui un bon professional».', example:'Per bé que sigui difícil, cal intentar-ho.' },

    // LÈXIC FORMAL C1
    { id:'c1-lf1', type:'transform', level:'c1', category:'Lèxic formal',
      question:'Reformula en registre formal i precís:',
      original:'«Ell va fer moltes coses importants per al país»',
      hints:['fer → dur a terme / impulsar / executar','coses → iniciatives / reformes / mesures','importants → rellevants / significatives / d\'abast nacional'],
      sample:'Va dur a terme nombroses iniciatives rellevants per al conjunt del país.',
      theory:'Al C1 cal substituir verbs genèrics i noms buits per alternatives precises.', example:'Va impulsar reformes estructurals de llarg abast nacional.' },
    { id:'c1-lf2', type:'transform', level:'c1', category:'Lèxic formal',
      question:'Transforma al registre acadèmic formal:',
      original:'«La gent diu que el canvi climàtic és un problema molt gran»',
      hints:['la gent → diverses evidències científiques / estudis recents','dir → indicar / demostrar / constatar','molt gran → d\'una magnitud considerable / d\'escala global'],
      sample:'Diverses evidències científiques constaten que el canvi climàtic constitueix una problemàtica d\'escala global.',
      theory:'En registre acadèmic: elimina «la gent»; usa fonts específiques i verbs epistèmics.', example:'Els estudis disponibles indiquen que la situació és d\'una gravetat considerable.' },
    { id:'c1-lf3', type:'fill', level:'c1', category:'Lèxic formal',
      question:'Omple amb la nominalització correcta del verb indicat:',
      sentence:'La ___ de les dades ha posat de manifest irregularitats significatives en la gestió.',
      display:'nominalització d\'«analitzar»', answers:['anàlisi','tasca d\'anàlisi'],
      theory:'La nominalització (verb → nom) és una marca de registre acadèmic: analitzar → anàlisi.', example:'L\'anàlisi de les dades ha evidenciat... / La implementació del projecte...' },
    { id:'c1-lf4', type:'choice', level:'c1', category:'Lèxic formal',
      question:'Quina paraula encaixa millor en el context acadèmic?',
      text:'L\'estudi ___ l\'existència d\'una correlació directa entre les dues variables.',
      options:['diu','constata','explica','comenta'],
      correct:1, theory:'«Constatar» és un verb epistèmic que expressa que quelcom ha quedat verificat empíricament. Molt freqüent en textos científics.', example:'L\'estudi constata / evidencia / posa de manifest / demostra...' },
    { id:'c1-lf5', type:'writing', level:'c1', category:'Lèxic formal',
      question:'Reescriu en registre acadèmic formal, usant nominalitzacions i verbs precisos: «La gent participa més en les decisions».',
      keywords:['nominalitzar els verbs','eliminar «la gent»','usar passiva reflexa si cal'],
      sample:'S\'ha observat un increment significatiu de la participació ciutadana en els processos de presa de decisions.',
      theory:'Nominalització + passiva reflexa + lèxic precís = tríada del registre acadèmic al C1.', example:'«La gent participa més» → «S\'observa un increment de la participació ciutadana».' },
    { id:'c1-lf6', type:'transform', level:'c1', category:'Lèxic formal',
      question:'Reformula per a un informe institucional:',
      original:'«El govern ha de fer alguna cosa per resoldre aquest problema tan important»',
      hints:['ha de fer → ha d\'adoptar / cal que implementi / s\'imposa','alguna cosa → mesures concretes / una estratègia integral','tan important → d\'envergadura / de primer ordre / estructural'],
      sample:'S\'imposa que les administracions competents implementin mesures concretes per resoldre una problemàtica d\'envergadura estructural.',
      theory:'En informes institucionals: subjecte impersonal, verb d\'obligació formal, complement precís.', example:'Cal que les institucions adoptin una estratègia integral per fer front a un repte de primer ordre.' },

    // ARGUMENTACIÓ
    { id:'c1-arg1', type:'reorder', level:'c1', category:'Argumentació',
      question:'Ordena per construir un argument acadèmic ben estructurat:',
      parts:['Tot i això, alguns experts qüestionen l\'eficàcia real d\'aquestes polítiques.','Les mesures de reducció d\'emissions han demostrat resultats positius en diverses metròpolis.','Per consegüent, cal un enfocament holístic que combini diverses estratègies complementàries.','Concretament, argumenten que sense canvis en el model de consum, l\'impacte és limitat.'],
      correct:[1,0,3,2], theory:'Estructura: tesi → contraargument → matís → conclusió integradora.', example:'Afirmació → Objecció («tot i això») → Matís → Conclusió («per consegüent»).' },
    { id:'c1-arg2', type:'writing', level:'c1', category:'Argumentació',
      question:'Escriu un paràgraf argumentatiu de 4 frases sobre el treball en remot: tesi, argument, contraargument i conclusió matisada.',
      keywords:['tesi clara','connector de causa: en efecte / ja que','contraargument: tot i això / ara bé','conclusió: en definitiva / per consegüent'],
      sample:'El treball en remot ha demostrat ser una modalitat eficient que millora la conciliació. En efecte, estudis recents evidencien increments de productivitat. Tot i això, no tots els perfils se\'n beneficien per igual. En definitiva, cal un model híbrid que combini les avantatges de les dues modalitats.',
      theory:'Estructura C1: tesi → fonamentació → contraargument → conclusió matisada. La conclusió ha de ser una síntesi, no una repetició.', example:'Tesi → En efecte... → Tot i això... → En definitiva...' },
    { id:'c1-arg3', type:'reading', level:'c1', category:'Argumentació',
      text:'Alguns defensors de la intel·ligència artificial sostenen que aquesta tecnologia resoldrà els grans problemes de la humanitat. Ara bé, cal matisar que les eines tecnològiques no actuen de manera autònoma: la seva eficàcia depèn de les decisions humanes. Per consegüent, el debat no hauria de centrar-se en la tecnologia, sinó en la responsabilitat dels seus creadors.',
      question:'Quina estratègia argumentativa usa l\'autor?',
      options:['Presenta una sola posició sense matissos','Presenta una afirmació, la matisa i redirigeix el debat cap a una conclusió diferent','Refuta completament la posició dels defensors de la IA'],
      correct:1, theory:'L\'autor usa l\'estratègia de «sí, però»: reconeix la posició contrària, la matisa i redirigeix la conclusió.', example:'Reconèixer → Matisar («Ara bé») → Concloure diferent («Per consegüent»).' },
    { id:'c1-arg4', type:'choice', level:'c1', category:'Argumentació',
      question:'Quina expressió serveix per introduir una tesi en un text acadèmic?',
      options:['Crec que és important dir que...','Es fa palès que les mesures adoptades han estat insuficients.','Bueno, bàsicament el que vull dir és que...'],
      correct:1, theory:'En registre acadèmic, la tesi s\'introdueix amb expressions impersonals i objectives: «Es fa palès que», «Cal tenir present que», «Les evidències indiquen que».', example:'Es fa palès que les polítiques actuals no han assolit els objectius previstos.' },
    { id:'c1-arg5', type:'fill', level:'c1', category:'Argumentació',
      question:'Omple amb el connector argumentatiu que introdueix un matís a la posició anterior:',
      sentence:'Els resultats han estat satisfactoris. ___, cal no perdre de vista les limitacions metodològiques.',
      display:'connector de matís (no «però»)',
      answers:['ara bé','dit això','cal matisar que','no obstant això','tanmateix'],
      theory:'«Ara bé» i «dit això» introdueixen un matís que relativitza sense contradir frontalment. Característics del registre formal C1.', example:'La mesura ha estat eficaç. Ara bé, cal avaluar els seus efectes a llarg termini.' },

    // COMPRENSIÓ CRÍTICA
    { id:'c1-crit1', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'La globalització ha provocat una paradoxa singular: mentre s\'accelera la homogeneïtzació cultural, assistim a un renaixement de les identitats locals. Aquesta tensió dialèctica no és una anomalia, sinó el reflex d\'una necessitat humana fonamental: la cerca d\'arrels davant la desorientació del canvi vertiginós.',
      question:'Quina és la tesi implícita de l\'autor?',
      options:['La globalització és intrínsecament negativa per a les cultures locals','La revitalització de les identitats locals és una resposta natural i esperada','La homogeneïtzació cultural és inevitable i positiva'],
      correct:1, theory:'«No és una anomalia» i «necessitat fonamental» → l\'autor legitima i naturalitza el fenomen.', example:'Identifica les paraules valoratives de l\'autor i la seva posició real.' },
    { id:'c1-crit2', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'La crisi de la biodiversitat sovint queda eclipsada pel debat sobre el canvi climàtic, com si tots dos fenòmens fossin compartiments estancs. En realitat, constitueixen dues cares d\'una mateixa crisi sistèmica. Separar-los no és tan sols una simplificació: és un error estratègic que permet tractar els símptomes ignorant la malaltia de fons.',
      question:'Quina posició defensa implícitament l\'autor?',
      options:['La crisi de biodiversitat és menys important que el canvi climàtic','Cal abordar biodiversitat i canvi climàtic com a fenòmens interconnectats, no separats','El debat sobre el canvi climàtic és innecessari'],
      correct:1, theory:'«Dues cares d\'una mateixa crisi» i «tractar els símptomes» argumenten la necessitat d\'un enfocament integrat.', example:'«Dues cares d\'una mateixa crisi» = interconnectats. «Tractar els símptomes» = abordar-los per separat és insuficient.' },
    { id:'c1-crit3', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin recurs argumentatiu usa l\'autor en: «Separar-los no és tan sols una simplificació: és un error estratègic»?',
      options:['Una contradicció interna entre les dues afirmacions','Una gradació ascendent: l\'error va més enllà d\'una mera simplificació','Una concessió que reconeix la validesa de la posició contrària'],
      correct:1, theory:'L\'estructura «no és tan sols X: és Y» on Y > X expressa una gradació ascendent que reforça la gravetat.', example:'«No és tan sols un error: és una irresponsabilitat.» → Y és pitjor que X.' },
    { id:'c1-crit4', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'L\'anomenada «fatiga de compassió» afecta les professions d\'ajuda. Paradoxalment, les persones més empàtiques en són les primeres víctimes. Alguns experts proposen establir límits emocionals estrictes; d\'altres, en canvi, consideren que la solució no passa per la distància afectiva, sinó per una gestió emocional activa.',
      question:'Quina és la tensió central que planteja el text?',
      options:['Si la fatiga de compassió existeix realment','El debat entre distanciar-se emocionalment vs. gestionar activament les emocions','Si els professionals empàtics haurien de canviar de professió'],
      correct:1, theory:'«Alguns experts... d\'altres, en canvi» presenta dues solucions enfrontades. La tensió és entre les dues propostes.', example:'«Alguns... d\'altres, en canvi» → dos bàndols en tensió.' },
    { id:'c1-crit5', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin to predomina en: «Podria semblar que les dades parlen per si soles. Res més lluny de la realitat»?',
      options:['Optimista i confirmatiu','Crític i correctiu: refuta una visió ingènua sobre les dades','Dubitatiu: no sap si les dades són fiables'],
      correct:1, theory:'«Res més lluny de la realitat» és una expressió correctiva molt forta. L\'autor primer presenta una posició i tot seguit la derriba completament.', example:'«Podria semblar X / Res més lluny» → refutació directa d\'una creença prèvia.' },

    // PRODUCCIÓ FORMAL
    { id:'c1-pro1', type:'writing', level:'c1', category:'Producció formal',
      question:'Redacta la introducció d\'un informe sobre l\'ús del català a les universitats. Ha d\'incloure: context, problema i objectiu.',
      keywords:['context institucional','problema identificat','objectiu de l\'informe','registre acadèmic impersonal'],
      sample:'La present anàlisi té per objecte examinar la situació del català en l\'àmbit universitari. Malgrat els avenços legislatius, persisteixen desequilibris significatius en l\'ús de la llengua com a vehicle d\'ensenyament. L\'estudi pretén identificar els factors que condicionen aquesta situació i formular propostes per revertir-la.',
      theory:'Una introducció formal: marc contextual + problema + objectiu. Evita la 1a persona singular.', example:'«La present anàlisi té per objecte...» / «El present informe examina...»' },
    { id:'c1-pro2', type:'writing', level:'c1', category:'Producció formal',
      question:'Redacta la conclusió d\'un informe sobre el mercat laboral juvenil. Ha d\'incloure: síntesi, valoració i recomanació.',
      keywords:['síntesi: en definitiva / tot plegat','valoració objectiva','recomanació: es recomana / cal que'],
      sample:'En definitiva, les dades analitzades posen de manifest desequilibris estructurals que no es poden atribuir exclusivament a factors conjunturals. La precarietat i la sobrequalificació constitueixen els reptes més urgents. Es recomana, per consegüent, l\'adopció de mesures que combinin formació, incentius a la contractació i polítiques actives d\'ocupació.',
      theory:'Una conclusió formal: síntesi sense noves idees + valoració objectiva + recomanació accionable. Evita la 1a persona.', example:'En definitiva... / Les evidències indiquen... / Es recomana, per consegüent...' },
    { id:'c1-pro3', type:'choice', level:'c1', category:'Producció formal',
      question:'Quina expressió és la més adequada per referir-se a dades en un text acadèmic?',
      options:['Com és obvi per a tothom...','D\'acord amb les evidències disponibles, cal concloure que...','Jo crec que les dades demostren que...'],
      correct:1, theory:'Les dades s\'introdueixen amb expressions epistèmiques objectives: «D\'acord amb», «Segons», «Les evidències indiquen», «Les dades posen de manifest».', example:'D\'acord amb les evidències disponibles, es constata una millora significativa dels indicadors.' },
    { id:'c1-pro4', type:'writing', level:'c1', category:'Producció formal',
      question:'Transforma al registre acadèmic: «El problema és que la gent no fa cas de les normes i les coses van malament».',
      keywords:['la gent → la ciutadania / els agents','fer cas → complir / acatar','van malament → es deterioren / presenten disfuncions'],
      sample:'La manca de compliment de la normativa per part de la ciutadania genera disfuncions que comprometen l\'eficàcia del sistema.',
      theory:'Eliminar «la gent», «fer cas», «anar malament»; incorporar nominalitzacions i vocabulari tècnic.', example:'La manca de compliment... genera disfuncions... compromet l\'eficàcia...' },
    { id:'c1-pro5', type:'fill', level:'c1', category:'Producció formal',
      question:'Omple amb l\'expressió impersonal formal adequada:',
      sentence:'___ que les polítiques actuals no han assolit els resultats esperats en matèria d\'habitatge.',
      display:'expressió impersonal epistèmica',
      answers:['es fa palès','és evident','cal constatar','s\'observa','es constata'],
      theory:'En registre acadèmic, s\'evita la 1a persona. Expressions impersonals: «es fa palès», «es constata», «s\'observa», «es posa de manifest».', example:'Es fa palès que la situació requereix una intervenció urgent.' },

    // ORACIONS DE RELATIU
    { id:'c1-rel1', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Tria la construcció de relatiu correcta en registre culte:',
      text:'La proposta ___ es va presentar ahir no compleix els requisits legals.',
      options:['que la qual','la qual','en la qual que','qui'],
      correct:1, theory:'En registre formal, «el qual / la qual» substitueix «que» quan pot crear ambigüitat o en prosa elaborada.', example:'El document al qual fas referència no és vàlid.' },
    { id:'c1-rel2', type:'fill', level:'c1', category:'Oracions de relatiu',
      question:'Completa amb el pronom relatiu formal correcte (amb preposició «en»):',
      sentence:'El projecte ___ hem treballat durant mesos ha estat finalment aprovat.',
      display:'en/al + qual', answers:['en el qual','al qual'],
      theory:'Quan el relatiu va precedit de preposició, cal usar «el qual / la qual» en registre formal, no simplement «que».', example:'El comitè al qual pertanyo... / La reunió en la qual es va decidir...' },
    { id:'c1-rel3', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Quina frase usa correctament les oracions de relatiu?',
      options:['Els participants que, tots ells, havien superat la prova van ser admesos.','Els participants que havien superat la prova van ser admesos.','Els participants, qui havien superat la prova, van ser admesos.'],
      correct:1, theory:'«Qui» s\'usa per a persones en funció de subjecte, preferentment en relativa sense antecedent. En relativa especificativa amb antecedent, s\'usa «que».', example:'Els qui vulguin participar que s\'apuntin. / Els estudiants que han aprovat...' },
    { id:'c1-rel4', type:'fill', level:'c1', category:'Oracions de relatiu',
      question:'Converteix la frase en relativa explicativa afegint comes:',
      sentence:'Escriu la versió correcta de: El director que va signar el document és el responsable.',
      display:'insereix comes per fer-la explicativa',
      answers:['El director, que va signar el document, és el responsable.'],
      theory:'Relativa especificativa (sense comes): identifica quin director. Relativa explicativa (amb comes): afegeix info sobre un director ja identificat.', example:'El professor, que sap japonès, és el millor. (explicativa)' },
    { id:'c1-rel5', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Quina construcció de relatiu és la més formal i precisa per a un subjecte?',
      text:'La comissió ___ va elaborar l\'informe presentarà les seves conclusions dimecres.',
      options:['que','la qual','qui','on'],
      correct:1, theory:'En registre formal, «la qual» s\'usa per a subjectes de relativa quan l\'antecedent és un nom, especialment en prosa elaborada.', example:'La comissió la qual va elaborar l\'informe... (formal).' },

    // SUBJUNTIU IMPERFET
    { id:'c1-si1', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      question:'Usa el subjuntiu imperfet per completar la frase:',
      sentence:'El director va demanar que tots els membres ___ puntuals a la reunió.',
      display:'arribar (3a pers. pl. subj. imperfet)', answers:['arribessin'],
      theory:'Verb principal en passat → verb subordinat en imperfet de subjuntiu. 3a persona plural: -essin.', example:'Va demanar que tots portessin la documentació.' },
    { id:'c1-si2', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina frase usa correctament la concordança temporal?',
      options:['Voldria que vingui aviat.','Voldria que vingués aviat.','Volia que vindrà aviat.'],
      correct:1, theory:'Condicional (voldria) → subjuntiu imperfet (vingués). El condicional actua com un «passat» per a la concordança temporal.', example:'Voldria que m\'expliqués la situació.' },
    { id:'c1-si3', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      question:'Completa en estil indirecte al passat:',
      sentence:'Va dir: «Vull que tots facin l\'exercici». → Va dir que volia que tots ___ l\'exercici.',
      display:'fer (3a pers. pl. subj. imperfet)', answers:['fessin'],
      theory:'Estil indirecte al passat: el present de subj. «facin» es transforma en imperfet «fessin» quan el verb introductori és en passat.', example:'Va dir que volia que fessin silenci.' },
    { id:'c1-si4', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina forma verbal d\'imperfet de subjuntiu és incorrecta?',
      options:['fos (ser)','tingués (tenir)','pugués (poder)'],
      correct:2, theory:'La forma correcta de «poder» en imperfet de subjuntiu és «pogués». «Pugués» és una confusió amb el present de subj. «pugui».', example:'Si pogués venir, ho faria. (subj. imperfet)' },
    { id:'c1-si5', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      question:'Usa «tant de bo» + imperfet de subjuntiu per a un desig difícil:',
      sentence:'Tant de bo ___ més temps per dedicar-me als projectes que m\'agraden!',
      display:'tenir (1a pers. sg. imperfet subj.)', answers:['tingués'],
      theory:'«Tant de bo» + imperfet de subjuntiu: desig poc probable o impossible en el present.', example:'Tant de bo tingués temps! (poc probable)' },
    { id:'c1-si6', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina opció completa correctament la condicional irreal en el passat?',
      text:'Si hagués sabut la veritat, ___ d\'una altra manera.',
      options:['actuaria','hauria actuat','hagués actuat'],
      correct:1, theory:'Condicional irreal en el passat: si + plusquamperfet de subj. + condicional compost (hauria + participi).', example:'Si hagués estudiat més, hauria aprovat.' },

    // PRONOMS FEBLES
    { id:'c1-pf1', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quin pronom feble substitueix correctament «de política» en la resposta?',
      text:'«Parleu de política?» «Sí, ___ parleu sovint.»',
      options:['la','hi','en','ho'],
      correct:2, theory:'El pronom «en» substitueix complements introduïts per «de» (temes, matèries). «Parlar de X» → «en parlar».', example:'«Parles de la reunió?» «Sí, en parlo.»' },
    { id:'c1-pf2', type:'fill', level:'c1', category:'Pronoms febles',
      question:'Substitueix el sintagma subratllat pel pronom feble adequat:',
      sentence:'Vaig al mercat demà. → ___ vaig demà.',
      display:'pronom de lloc de destinació', answers:['hi'],
      theory:'«Hi» substitueix complements de lloc on es va o on s\'és (complement introduït per «a» o «en»).', example:'«Vas a la reunió?» «Sí, hi vaig.»' },
    { id:'c1-pf3', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quina combinació de pronoms febles és correcta per a «Li explico el problema»?',
      options:['Lo li explico.','Li ho explico.','El li explico.'],
      correct:1, theory:'Quan el CD és una frase o concepte abstracte, s\'usa «ho» (neutre). Ordre: CI (li) + CD (ho) → li ho.', example:'«Li explico el que ha passat.» → «Li ho explico.»' },
    { id:'c1-pf4', type:'fill', level:'c1', category:'Pronoms febles',
      question:'Omple amb el pronom feble partitiu correcte:',
      sentence:'Vols formatge? Sí, ___ vull una mica, si us plau.',
      display:'pronom partitiu (quantitat indeterminada)', answers:['en'],
      theory:'«En» s\'usa com a pronom partitiu quan el CD no porta article determinat o porta un quantificador.', example:'«Tens germanes?» «Sí, en tinc dues.»' },
    { id:'c1-pf5', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quina frase conté un ús incorrecte d\'un pronom feble?',
      options:['Hi ha molts participants a la sala.','Hi han molts participants a la sala.','A la sala hi ha molts participants.'],
      correct:1, theory:'«Hi ha» és invariable en nombre: mai «hi han». El verb «haver-hi» d\'existència no concorda amb el sintagma que el segueix.', example:'✓ Hi ha moltes persones. ✗ Hi han moltes persones.' },
    { id:'c1-pf6', type:'fill', level:'c1', category:'Pronoms febles',
      question:'Pronominalitza CD i CI: «Dóna el llibre a la Maria» → «Dóna-___»:',
      sentence:'Escriu la combinació completa de pronoms amb guionet darrere el verb.',
      display:'CI (li) + CD masculí sing. (el → \'l)', answers:['li\'l','dóna-li\'l'],
      theory:'Ordre en imperatius: verb + CI + CD. «li» + «el» → «li\'l» (contracció). S\'uneix amb guionet al verb.', example:'Dóna-li\'l. / Porta-me\'l.' },

    // FRASES FETES
    { id:'c1-ff1', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina és la frase feta catalana equivalent a «estar muy ocupado»?',
      options:['Estar a les vores','Anar de bòlit','Tenir moltes mans'],
      correct:1, theory:'«Anar de bòlit» és la locució per expressar que s\'està molt ocupat. Pertany al registre col·loquial.', example:'Aquesta setmana anem de bòlit amb el tancament del projecte.' },
    { id:'c1-ff2', type:'fill', level:'c1', category:'Frases fetes',
      question:'Omple la frase feta: «No és moment de ___ la tovallola; cal continuar lluitant».',
      display:'verb de la locució (abandonar la lluita)', answers:['tirar','llançar'],
      theory:'«Tirar la tovallola» significa rendir-se. Prové del món de la boxa, on es llança la tovallola per reconèixer la derrota.', example:'Malgrat les dificultats, no hem de tirar la tovallola ara.' },
    { id:'c1-ff3', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina col·locació lèxica és correcta en català?',
      options:['agafar una decisió','prendre una decisió','fer una decisió'],
      correct:1, theory:'«Prendre una decisió» és la col·locació correcta en català. «Agafar» seria un calc incorrecte en aquest context.', example:'El consell va prendre la decisió d\'ajornar la reunió.' },
    { id:'c1-ff4', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina és la frase feta catalana per a «estar entre la espada y la pared»?',
      options:['Estar entre martell i enclusa','Estar en la corda fluixa','Anar a poc a poc'],
      correct:0, theory:'«Estar entre el martell i l\'enclusa» expressa una situació difícil sense bona sortida. Ambdues variants s\'usen en català.', example:'Es trobava entre el martell i l\'enclusa: tant si acceptava com si refusava, sortia perdent.' },
    { id:'c1-ff5', type:'writing', level:'c1', category:'Frases fetes',
      question:'Reformula les frases fetes col·loquials en registre formal per a un text professional.',
      keywords:['«anar de bòlit» → registre formal','«fer els ulls grossos» → registre formal','«perdre el fil» → registre formal'],
      sample:'"Anar de bòlit" → "trobar-se en una situació de càrrega de treball excepcional" / "Fer els ulls grossos" → "ignorar deliberadament les irregularitats" / "Perdre el fil" → "perdre el seguiment del raonament".',
      theory:'Les frases fetes pertanyen sovint al registre col·loquial. En textos formals cal substituir-les per expressions neutres o tècniques.', example:'Col·loquial: «anar de bòlit» → Formal: «tenir una càrrega de treball excepcional».' },
    { id:'c1-ff6', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina frase feta s\'usa per expressar que algú viu còmodament sense fer-hi gaire res?',
      options:['Fer la viu-viu','Estar a l\'aguait','Tirar la tovallola'],
      correct:0, theory:'«Fer la viu-viu» significa viure sense gaire esforç, aprofitant-se de la situació.', example:'Mentre els companys treballaven, ell feia la viu-viu sense aportar res al grup.' },

    // DERIVACIÓ I FLEXIÓ
    { id:'c1-df1', type:'fill', level:'c1', category:'Derivació i flexió',
      question:'Forma la nominalització (substantiu) del verb indicat:',
      sentence:'La ___ de les mesures ha requerit la col·laboració de totes les parts implicades.',
      display:'nominalització d\'«implementar»', answers:['implementació'],
      theory:'El sufix «-ció / -ió» forma noms d\'acció: implementar → implementació; aplicar → aplicació.', example:'avaluar → avaluació; decidir → decisió; organitzar → organització.' },
    { id:'c1-df2', type:'choice', level:'c1', category:'Derivació i flexió',
      question:'Quina paraula derivada amb el prefix «des-» és correcta?',
      options:['desconèixer (ignorar completament)','desconexar (mala formació)','desconexió (forma castellana)'],
      correct:0, theory:'El prefix «des-» expressa negació o reversió: «desconèixer» (no conèixer), «desfer» (revertir «fer»). Cal usar les arrels catalanes.', example:'desfer / desconèixer / desaparèixer / desmuntar / desacord.' },
    { id:'c1-df3', type:'fill', level:'c1', category:'Derivació i flexió',
      question:'Forma el plural correcte del mot indicat:',
      sentence:'Els ___ dels partits es reuniran dimecres per negociar l\'acord.',
      display:'plural de «règim»', answers:['règims'],
      theory:'Els mots plans acabats en consonant formen el plural afegint «-s»: «règim» → «règims». No «règimes».', example:'règim → règims; caràcter → caràcters; síntesi → síntesis.' },
    { id:'c1-df4', type:'choice', level:'c1', category:'Derivació i flexió',
      question:'Quina forma verbal d\'imperfet de subjuntiu és correcta per a «poder»?',
      options:['pugués','pogués','pudés'],
      correct:1, theory:'L\'imperfet de subjuntiu de «poder» és «pogués». La forma «pugués» és una confusió amb el present de subj. «pugui».', example:'Si pogués venir, ho faria. (imperfet subj.)' },
    { id:'c1-df5', type:'fill', level:'c1', category:'Derivació i flexió',
      question:'Forma l\'adjectiu derivat amb el sufix «-ble» a partir del verb indicat:',
      sentence:'L\'objectiu és ___, però requerirà un esforç considerable.',
      display:'adjectiu derivat d\'«assolir» (que es pot assolir)', answers:['assolible'],
      theory:'El sufix «-ble» forma adjectius de possibilitat passiva: assolir → assolible; sostenir → sostenible.', example:'resoldre → resoluble; comprendre → comprensible.' },
    { id:'c1-df6', type:'writing', level:'c1', category:'Derivació i flexió',
      question:'A partir dels verbs donats, forma les nominalitzacions i usa-les en una frase acadèmica per a cadascuna.',
      keywords:['avaluar → avaluació','implementar → implementació','analitzar → anàlisi'],
      sample:'L\'avaluació dels resultats ha permès identificar àrees de millora. La implementació de les mesures ha resultat satisfactòria. L\'anàlisi de les dades evidencia una tendència positiva.',
      theory:'Les nominalitzacions permeten condensar informació i elevar el registre. Són la marca principal del discurs acadèmic.', example:'avaluar → «l\'avaluació ha demostrat...» / implementar → «la implementació del projecte...»' },

    // ESTIL INDIRECTE
    { id:'c1-ei1', type:'transform', level:'c1', category:'Estil indirecte',
      question:'Transforma en estil indirecte (verb introductor en passat):',
      original:'«La directora va dir: El projecte s\'entregarà demà.»',
      hints:['futur → condicional: s\'entregaria','demà → l\'endemà','La directora va dir que...'],
      sample:'La directora va dir que el projecte s\'entregaria l\'endemà.',
      theory:'Futur → condicional en estil indirecte passat. «Demà» → «l\'endemà» (adverbi de temps adaptat).', example:'«Vindré» → va dir que vindria. / «Ho faré» → va prometre que ho faria.' },
    { id:'c1-ei2', type:'fill', level:'c1', category:'Estil indirecte',
      question:'Completa la transformació en estil indirecte:',
      sentence:'Va dir: «Estic cansat.» → Va dir que ___ cansat.',
      display:'estar (imperfet, 3a pers. sing.)', answers:['estava'],
      theory:'Present → imperfet en estil indirecte (verb introductor en passat). «Estic» → «estava».', example:'«Treballo molt» → va dir que treballava molt.' },
    { id:'c1-ei3', type:'choice', level:'c1', category:'Estil indirecte',
      question:'Quina transformació a estil indirecte és correcta?',
      options:['Va preguntar: «On vius?» → Va preguntar on vivies.','Va preguntar: «On vius?» → Va preguntar que on vius.','Va preguntar: «On vius?» → Va preguntar on viuràs.'],
      correct:0, theory:'Interrogatives indirectes: «preguntar si/on/quan/com...» (sense «que»). El verb passa a imperfet si el verb introductor és en passat.', example:'«Quan arribes?» → Va preguntar quan arribava.' },
    { id:'c1-ei4', type:'transform', level:'c1', category:'Estil indirecte',
      question:'Transforma l\'imperatiu en estil indirecte:',
      original:'«El cap va dir: Envieu l\'informe avui!»',
      hints:['Imperatiu → que + subjuntiu imperfet','«avui» → aquell dia','El cap va demanar/ordenar que...'],
      sample:'El cap va demanar que enviessin l\'informe aquell dia.',
      theory:'Imperatius → «demanar/ordenar que + subjuntiu imperfet» en estil indirecte (verb en passat).', example:'«Veniu!» → Va demanar que vinguessin. / «Escriu-me!» → Va demanar que li escrigués.' },
    { id:'c1-ei5', type:'choice', level:'c1', category:'Estil indirecte',
      question:'Quina transformació de l\'adverbi de temps és correcta?',
      options:['Va dir que vindria avui.','Va dir que vindria aquell dia.','Va dir que venia avui.'],
      correct:1, theory:'«Avui» en estil indirecte (passat) → «aquell dia». «Demà» → «l\'endemà». «Ahir» → «el dia anterior». «Aquí» → «allà».', example:'«Avui» → aquell dia. / «Demà» → l\'endemà. / «Aquí» → allà.' },
    { id:'c1-ei6', type:'fill', level:'c1', category:'Estil indirecte',
      question:'Tria el marcador introductori correcte:',
      sentence:'«Tens el document?» → Me ___ si tenia el document.',
      display:'marcador d\'interrogativa indirecta de sí/no', answers:['va preguntar','va demanar'],
      theory:'Interrogatives indirectes de sí/no → «preguntar si». Parcials → «preguntar on/quan/com». No s\'usa «dir que» per a preguntes.', example:'Va preguntar si havia acabat. / Va preguntar quan vindria.' },
    { id:'c1-ei7', type:'reading', level:'c1', category:'Estil indirecte',
      text:'En la roda de premsa, la ministra va afirmar que les mesures entrarien en vigor el mes següent. Va explicar que el govern havia treballat durant mesos en la proposta i que confiava que els resultats serien positius. Quan un periodista li va preguntar si hi hauria exempcions, va respondre que aquella decisió s\'estudiava encara.',
      question:'Quins canvis s\'han produït en passar de discurs directe a indirecte?',
      options:['Cap canvi: el text ja era en estil indirecte original','Futur → condicional, present/passat → imperfet/plusquamperfet, adverbis adaptats («el mes següent»)','Només han canviat els pronoms personals'],
      correct:1, theory:'«Entraran» → «entrarien» (cond.); «hem treballat» → «havia treballat» (plusq.); «el proper mes» → «el mes següent» (adverbi adaptat).', example:'Identifica cada canvi de temps verbal al text.' },

    // PASSIVA I IMPERSONAL
    { id:'c1-pi1', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina és la construcció preferida en català per expressar passiva sense agent?',
      text:'«El projecte fue aprobado» → En català formal:',
      options:['El projecte va ser aprovat.','Es va aprovar el projecte.','El projecte ha sigut aprovat.'],
      correct:1, theory:'El català prefereix la passiva reflexa (es + verb) quan l\'agent és irrellevant. «Va ser aprovat» és correcte però menys habitual; «ha sigut» és híbrid incorrecte.', example:'Es van prendre mesures. / Es va signar l\'acord. / Es va decidir ajornar.' },
    { id:'c1-pi2', type:'fill', level:'c1', category:'Passiva i impersonal',
      question:'Completa amb la forma de passiva reflexa correcta:',
      sentence:'___ moltes entrades per al concert en poques hores.',
      display:'vendre (passiva reflexa, plural)', answers:['Es van vendre','S\'han venut'],
      theory:'Passiva reflexa: «es + verb». Quan el CD és plural, el verb concorda: «Es van vendre moltes entrades» (plural).', example:'Es van vendre totes les entrades. / Es van aprovar les mesures.' },
    { id:'c1-pi3', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina construcció és la més adequada per a una norma general en text institucional?',
      options:['Els estudiants han d\'entregar els treballs abans del dia 15.','S\'han d\'entregar els treballs abans del dia 15.','Tu has d\'entregar els treballs el dia 15.'],
      correct:1, theory:'Per a normes generals, la impersonal amb «es/se» evita mencionar l\'agent i dóna un to objectiu i institucional.', example:'S\'ha de presentar la documentació. / Es recomana llegir les instruccions.' },
    { id:'c1-pi4', type:'transform', level:'c1', category:'Passiva i impersonal',
      question:'Reformula en passiva perifràstica formal amb l\'agent explícit:',
      original:'«El jurat va concedir el premi a la millor novel·la.»',
      hints:['el premi → subjecte de la passiva','va ser concedit pel jurat','participi concordat amb el subjecte femení'],
      sample:'El premi va ser concedit pel jurat a la millor novel·la.',
      theory:'Passiva perifràstica: subjecte pacient + ser conjugat + participi (concordat en gènere i nombre) + per + agent.', example:'El document va ser signat pel president.' },
    { id:'c1-pi5', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina frase usa incorrectament la passiva?',
      options:['Es van publicar els resultats ahir.','Va ser decidit no fer canvis.','Es van ser aprovades les mesures.'],
      correct:2, theory:'«Es van ser aprovades» combina impropriament passiva reflexa i perifràstica. Cal usar-ne una sola: «Es van aprovar» O «Van ser aprovades».', example:'Correcte: Es van aprovar / Van ser aprovades. Incorrecte: *Es van ser aprovades.' },
    { id:'c1-pi6', type:'fill', level:'c1', category:'Passiva i impersonal',
      question:'Omple amb la forma impersonal correcta:',
      sentence:'En aquest museu no ___ fer fotografies amb flaix.',
      display:'impersonal amb «es» + infinitiu (no permetre)', answers:['es permet','es deixa','es pot'],
      theory:'Impersonal normativa: «no es + verb conjugat» o «no es pot + infinitiu». El verb va en singular quan no hi ha subjecte gramatical explícit.', example:'No es permet fumar. / Es recomana reservar. / No es pot aparcar aquí.' },
    { id:'c1-pi7', type:'reading', level:'c1', category:'Passiva i impersonal',
      text:'L\'acord va ser signat per tots els membres del consell. En la mateixa sessió, es van aprovar tres resolucions addicionals i es va decidir convocar una nova reunió. Cal destacar que no es va plantejar cap objecció formal per part dels assistents.',
      question:'Quines construccions passives i impersonals s\'usen al text i per a quina funció?',
      options:['Només passiva perifràstica','Passiva perifràstica per ressaltar l\'agent; passiva reflexa/impersonal per a accions generals sense agent','Només construccions impersonals'],
      correct:1, theory:'«Va ser signat pel consell» (perifràstica: agent rellevant) / «Es van aprovar», «es va decidir», «es va plantejar» (reflexa: agent irrellevant).', example:'Perifràstica quan l\'agent és important; reflexa quan no ho és.' },

    // +1 exercici per a categories existents amb 5 exercicis
    { id:'c1-arg6', type:'choice', level:'c1', category:'Argumentació',
      question:'Quina estratègia argumentativa s\'usa en: «Certament, hi ha arguments a favor. Tanmateix, les evidències apunten en la direcció contrària»?',
      options:['Refutació directa sense concessions','Concessió retòrica seguida de contraargument','Simple enumeració de dues posicions'],
      correct:1, theory:'La concessió retòrica («certament») reconeix la posició contrària sense abandonar la pròpia, i el contraargument («tanmateix») reorienta el discurs. És una marca de maduresa argumentativa.', example:'«És cert que X. No obstant, cal tenir present que Y.»' },
    { id:'c1-crit6', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin recurs usa l\'autor en: «Paradoxalment, com menys s\'hi pensa, millor es resol»?',
      options:['Una contradicció lògica sense fonament','Una paradoxa aparent que suggereix que la reflexió excessiva és contraproduent','Una conclusió basada en dades empíriques'],
      correct:1, theory:'La paradoxa aparent («paradoxalment + afirmació contraintuïtiva») és un recurs que capta l\'atenció i suggereix una veritat no òbvia. Al C1 cal identificar la intenció darrere del recurs retòric.', example:'«Paradoxalment, la simplicitat és el concepte més complex d\'assolir.»' },
    { id:'c1-pro6', type:'choice', level:'c1', category:'Producció formal',
      question:'Quina fórmula de tancament és la més adequada per a un informe acadèmic?',
      options:['Espero que us hagi agradat el que he explicat.','Les consideracions anteriors permeten concloure que cal adoptar un enfocament integral.','Bé, ja ho teniu. Espero que serveixi.'],
      correct:1, theory:'El tancament d\'un informe formal recull la tesi amb un verb epistèmic impersonal, sense referències personals ni registre col·loquial.', example:'«Les dades permeten afirmar que...» / «Es conclou, per tant, que...»' },
    { id:'c1-rel6', type:'fill', level:'c1', category:'Oracions de relatiu',
      question:'Completa amb el pronom relatiu adequat per a lloc en registre formal:',
      sentence:'La sala ___ es va celebrar la cerimònia era d\'un luxe inusitat.',
      display:'en la qual / on (relatiu de lloc)', answers:['en la qual','on','a la qual'],
      theory:'Relatius de lloc: «on» (estàndard i col·loquial), «en la qual / a la qual» (registre culte formal). En textos acadèmics es prefereix «en la qual».', example:'La ciutat on va néixer. / La sala en la qual es va celebrar.' },


  ]
};
