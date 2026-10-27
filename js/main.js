/**
 * Koson tumani 33-sonli maktab veb-sayti
 * Oddiy, toza va tezkor skriptlar
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPassportTable();
  initScriptSwitcher();
  initContactForm();
});

// 1. Mobil menyu
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// 2. Maktab pasporti ma'lumotlari (28 ta ko'rsatkich)
const passportData = [
  {
    id: 1,
    paramL: "Direktorning F.I.Sh. va tayinlangan sanasi",
    paramK: "Директорнинг Ф.И.Ш. ва тайинланган санаси",
    valL: "Islamova Rahila Sayitovna, 20.06.2000 y.",
    valK: "Исламова Рахила Сайитовна, 20.06.2000 й."
  },
  {
    id: 2,
    paramL: "Maktabning qurilgan yili",
    paramK: "Мактабнинг қурилган йили",
    valL: "1-bino: 1968-yil | 2-bino: 1997-yil",
    valK: "1-бино: 1968 йил | 2-бино: 1997 йил"
  },
  {
    id: 3,
    paramL: "Dastur asosida ta'mirlangan yili va turi",
    paramK: "Дастур асосида таъмирланган йили ва тури",
    valL: "2004-yil, kapital ta'mirlangan",
    valK: "2004 йил, капитал таъмирланган"
  },
  {
    id: 4,
    paramL: "Maktabning umumiy yer maydoni",
    paramK: "Мактабнинг умумий ер майдони",
    valL: "3.79 ga",
    valK: "3.79 га"
  },
  {
    id: 5,
    paramL: "Sektor raqami",
    paramK: "Сектор рақами",
    valL: "1-sektor (Koson tumani hokimi)",
    valK: "1-сектор (Косон тумани ҳокими)"
  },
  {
    id: 6,
    paramL: "Joylashgan hududi",
    paramK: "Жойлашган ҳудуди",
    valL: "Tuman markazi (markazdan 2 km)",
    valK: "Туман маркази (туман марказидан 2 км)"
  },
  {
    id: 7,
    paramL: "Maktabning yuridik manzili",
    paramK: "Мактабнинг юридик манзили",
    valL: "Koson tumani, Quyi Obron MFY, Chingiz Aytmatov ko'chasi 39-uy",
    valK: "Косон тумани, Қуйи Оброн МФЙ, Чингиз Айтматов кўчаси 39-уй"
  },
  {
    id: 8,
    paramL: "Telefon raqami (ish va mobil)",
    paramK: "Телефон рақами (иш ва мобил)",
    valL: "+998 91 214 06 31",
    valK: "+998 91 214 06 31"
  },
  {
    id: 9,
    paramL: "Maktab maqomi",
    paramK: "Мактаб мақоми",
    valL: "Umumiy o'rta ta'lim maktabi",
    valK: "Умумий ўрта таълим мактаби"
  },
  {
    id: 10,
    paramL: "O'quvchi o'rni (quvvati)",
    paramK: "Ўқувчи ўрни (қуввати)",
    valL: "Jami: 790 o'rin (1-bino: 380 o'rin, 2-bino: 410 o'rin)",
    valK: "Жами: 790 ўринли (1-бино: 380 ўринли, 2-бино: 410 ўринли)"
  },
  {
    id: 11,
    paramL: "Sig'im koeffitsiyenti",
    paramK: "Коэффициенти",
    valL: "1.0",
    valK: "1,0"
  },
  {
    id: 12,
    paramL: "Ta'lim tili",
    paramK: "Таълим тили",
    valL: "O'zbek tili",
    valK: "Ўзбек тили"
  },
  {
    id: 13,
    paramL: "O'quvchilar soni",
    paramK: "Ўқувчилар сони",
    valL: "741 nafar (o'zbek sinflarida: 741 nafar, rus sinflarida: 0)",
    valK: "741 нафар (ўзбек синфларида: 741 нафар, рус синфларида: 0)"
  },
  {
    id: 14,
    paramL: "Sinflar soni",
    paramK: "Синфлар сони",
    valL: "28 ta (o'zbek sinflar: 28 ta, rus sinflar: 0)",
    valK: "28 та (ўзбек синфлар: 28 та, рус синфлар: 0)"
  },
  {
    id: 15,
    paramL: "Navbatliligi (smenasi)",
    paramK: "Навбатлилиги (сменаси)",
    valL: "1-smenali (I-smenada: 28 ta sinf / 741 o'quvchi)",
    valK: "1-сменали (I-сменада: 28 та синф / 741 ўқувчи)"
  },
  {
    id: 16,
    paramL: "Pedagog xodimlar soni va ma'lumoti",
    paramK: "Педагог ходимлар сони ва маълумоти",
    valL: "55 nafar (oliy ma'lumotli diplomlar soni: 61 nafar)",
    valK: "55 нафар (олий маълумотли дипломлар сони: 61 нафар)"
  },
  {
    id: 17,
    paramL: "Toifasi bo'yicha taqsimot",
    paramK: "Тоифаси бўйича тақсимот",
    valL: "Oliy toifa: 16 nafar | I toifa: 12 nafar | II toifa: 17 nafar | Mutaxassis: 16 nafar",
    valK: "Олий тоифа: 16 нафар | I тоифа: 12 нафар | II тоифа: 17 нафар | Мутахассис: 16 нафар"
  },
  {
    id: 18,
    paramL: "Milliy reytingdagi o'rni (2026-yilda)",
    paramK: "Миллий рейтингдаги ўрни (2026 йилда)",
    valL: "Viloyatda 3-o'rin | Tumanda 3-o'rin",
    valK: "Вилоятда 3-ўрин | Туманда 3-ўрин"
  },
  {
    id: 19,
    paramL: "11-sinf bitiruvchilari va OTMga kirish",
    paramK: "11-синф битирувчилари ва ОТМга кириш",
    valL: "Bitiruvchilar: 12 nafar | OTMga kirganlar: 11 nafar (92%) | O'rtacha ball: 80 ball",
    valK: "Битирувчилар: 12 нафар | ОТМга кирганлар: 11 нафар (92%) | Ўртача балл: 80 балл"
  },
  {
    id: 20,
    paramL: "Ta'lim sifati past maktablar ro'yxatida",
    paramK: "Таълим сифати паст мактаблар рўйхатида",
    valL: "Ro'yxatda yo'q",
    valK: "Рўйхатда йўқ"
  },
  {
    id: 21,
    paramL: "Ma'naviy-ma'rifiy yo'nalish ko'rsatkichi",
    paramK: "Маънавий-маърифий йўналиш кўрсаткичи",
    valL: "«Yashil» maktab",
    valK: "«Яшил» мактаб"
  },
  {
    id: 22,
    paramL: "Maxsus fan xonalari",
    paramK: "Махсус фан хоналари",
    valL: "Fizika, kimyo, biologiya: umumiy sinflarda; mehnat xonasi (o'g'il bolalar uchun): mavjud",
    valK: "Физика, кимё, биология: умумий синфларда; меҳнат хонаси (ўғил болалар учун): мавжуд"
  },
  {
    id: 23,
    paramL: "Sport zali o'lchami va holati",
    paramK: "Спорт зали ўлчами ва ҳолати",
    valL: "18x9 m o'lchamli, holati ta'mirtalab",
    valK: "18х9 м ўлчамли, ҳолати таъмирталаб"
  },
  {
    id: 24,
    paramL: "Faollar zali sig'imi va holati",
    paramK: "Фаоллар зали сиғими ва ҳолати",
    valL: "Mavjud emas",
    valK: "Мавжуд эмас"
  },
  {
    id: 25,
    paramL: "Kutubxona holati",
    paramK: "Кутубхона ҳолати",
    valL: "Qoniqarli",
    valK: "Қониқарли"
  },
  {
    id: 26,
    paramL: "Informatika xonasi va internet",
    paramK: "Информатика хонаси ва интернет",
    valL: "1 ta sinfda 16 ta kompyuter + alohida 3 ta (jami 19 ta), to'liq internetga ulangan",
    valK: "1 та синфда 16 та компьютер + алоҳида 3 та (жами 19 та), тўлиқ интернетга уланган"
  },
  {
    id: 27,
    paramL: "Maktab oshxonasi sig'imi va holati",
    paramK: "Мактаб ошхонаси сиғими ва ҳолати",
    valL: "100 o'rinli, ta'mirtalab",
    valK: "100 ўринли, таъмирталаб"
  },
  {
    id: 28,
    paramL: "Hojatxona joylashuvi va holati",
    paramK: "Ҳожатхона жойлашуви ва ҳолати",
    valL: "Bino tashqarisida — 2 ta (bittasi ta'mirtalab)",
    valK: "Бино ташқарисида — 2 та (биттаси таъмирталаб)"
  }
];

let currentScript = 'latin';
let searchQuery = '';

function renderPassportTable() {
  const tbody = document.getElementById('passportTableBody');
  if (!tbody) return;

  const isLatin = currentScript === 'latin';
  const q = searchQuery.toLowerCase().trim();

  const filtered = passportData.filter(item => {
    if (!q) return true;
    const name = (isLatin ? item.paramL : item.paramK).toLowerCase();
    const val = (isLatin ? item.valL : item.valK).toLowerCase();
    return name.includes(q) || val.includes(q) || item.id.toString() === q;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:20px; color:var(--text-muted);">${isLatin ? "Ma'lumot topilmadi" : "Маълумот топилмади"}</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td class="td-id">${item.id}</td>
      <td class="td-name">${isLatin ? item.paramL : item.paramK}</td>
      <td>${isLatin ? item.valL : item.valK}</td>
    </tr>
  `).join('');
}

function initPassportTable() {
  const searchInput = document.getElementById('passportSearch');
  const printBtn = document.getElementById('printPassportBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderPassportTable();
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  renderPassportTable();
}

// 3. Til / Alifbo almashtirish (Lotin / Kirill)
function initScriptSwitcher() {
  const btnLatin = document.getElementById('btnLatin');
  const btnCyrillic = document.getElementById('btnCyrillic');
  if (!btnLatin || !btnCyrillic) return;

  function switchScript(script) {
    currentScript = script;
    if (script === 'latin') {
      btnLatin.classList.add('active');
      btnCyrillic.classList.remove('active');
    } else {
      btnCyrillic.classList.add('active');
      btnLatin.classList.remove('active');
    }

    document.querySelectorAll('[data-latin]').forEach(el => {
      const txt = script === 'latin' ? el.getAttribute('data-latin') : el.getAttribute('data-kirill');
      if (txt) el.textContent = txt;
    });

    renderPassportTable();
  }

  btnLatin.addEventListener('click', () => switchScript('latin'));
  btnCyrillic.addEventListener('click', () => switchScript('cyrillic'));
}

// 4. Murojaat formasi
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const toast = document.getElementById('toast');
    
    if (toast) {
      toast.textContent = currentScript === 'latin' 
        ? `Rahmat, ${name}! Murojaatingiz qabul qilindi.` 
        : `Раҳмат, ${name}! Мурожаатингиз қабул қилинди.`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }

    form.reset();
  });
}
