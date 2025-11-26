function switchTab(tabId) {
        const contents = document.querySelectorAll('.tab-content');
        const buttons = document.querySelectorAll('.tab-btn');
        
        contents.forEach(c => c.classList.remove('active'));
        buttons.forEach(b => b.classList.remove('active'));
        
        document.getElementById(tabId).classList.add('active');
        event.target.classList.add('active');
    }

    function simulatorVariabel1() {
        const output = `
>>> nama = "Bryan"
>>> umur = 16
>>> tinggi = 171.5
>>> adalah_pelajar = True
>>> print("Nama:", nama)
Nama: Bryan
>>> print("Umur:", umur)
Umur: 16
>>> print("Tinggi:", tinggi)
Tinggi: 171.5
>>> print("Pelajar:", adalah_pelajar)
Pelajar: True
        `;
        document.getElementById('output1').textContent = output.trim();
    }

    function simulatorVariabel2() {
        const varName = document.getElementById('varName').value;
        const varValue = document.getElementById('varValue').value;
        
        if (!varName || !varValue) {
            document.getElementById('output2').textContent = '>>> Error: Isi nama dan nilai variabel!';
            return;
        }
        
        const output = `>>> ${varName} = "${varValue}"
>>> print(${varName})
${varValue}
>>> print("Variabel ${varName} berisi:", ${varName})
Variabel ${varName} berisi: ${varValue}`;
        document.getElementById('output2').textContent = output;
    }

    function simulatorIO() {
        const nama = document.getElementById('inputNama').value || 'Pengguna';
        const output = `>>> nama = input("Siapa nama kamu? ")
Siapa nama kamu? ${nama}
>>> print("Halo, " + nama)
Halo, ${nama}
>>> print("Senang bertemu denganmu, " + nama + "!")
Senang bertemu denganmu, ${nama}!`;
        document.getElementById('outputIO').textContent = output;
    }

    function kalkulator() {
        const a = parseFloat(document.getElementById('angka1').value);
        const b = parseFloat(document.getElementById('angka2').value);
        const op = document.getElementById('operator').value;
        
        let hasil;
        let operasiText;
        
        switch(op) {
            case '+':
                hasil = a + b;
                operasiText = `${a} + ${b}`;
                break;
            case '-':
                hasil = a - b;
                operasiText = `${a} - ${b}`;
                break;
            case '*':
                hasil = a * b;
                operasiText = `${a} * ${b}`;
                break;
            case '/':
                if (b === 0) {
                    document.getElementById('outputKalkulator').textContent = '>>> Error: Tidak bisa dibagi dengan 0!';
                    return;
                }
                hasil = a / b;
                operasiText = `${a} / ${b}`;
                break;
            case '//':
                if (b === 0) {
                    document.getElementById('outputKalkulator').textContent = '>>> Error: Tidak bisa dibagi dengan 0!';
                    return;
                }
                hasil = Math.floor(a / b);
                operasiText = `${a} // ${b}`;
                break;
            case '%':
                if (b === 0) {
                    document.getElementById('outputKalkulator').textContent = '>>> Error: Tidak bisa modulo dengan 0!';
                    return;
                }
                hasil = a % b;
                operasiText = `${a} % ${b}`;
                break;
            case '**':
                hasil = Math.pow(a, b);
                operasiText = `${a} ** ${b}`;
                break;
        }
        
        const output = `>>> angka1 = ${a}
>>> angka2 = ${b}
>>> hasil = ${operasiText}
>>> print("Hasil:", hasil)
Hasil: ${hasil}`;
        document.getElementById('outputKalkulator').textContent = output;
    }

    function simulatorFunction() {
        const a = parseFloat(document.getElementById('funcA').value);
        const b = parseFloat(document.getElementById('funcB').value);
        
        const output = `>>> def tambah(a, b):
...     return a + b
...
>>> def kurang(a, b):
...     return a - b
...
>>> def kali(a, b):
...     return a * b
...
>>> hasil_tambah = tambah(${a}, ${b})
>>> hasil_kurang = kurang(${a}, ${b})
>>> hasil_kali = kali(${a}, ${b})
>>> print("Penjumlahan:", hasil_tambah)
Penjumlahan: ${a + b}
>>> print("Pengurangan:", hasil_kurang)
Pengurangan: ${a - b}
>>> print("Perkalian:", hasil_kali)
Perkalian: ${a * b}`;
        document.getElementById('outputFunc').textContent = output;
    }

    function projectKalkulator() {
        const a = parseFloat(document.getElementById('projectA').value);
        const b = parseFloat(document.getElementById('projectB').value);
        
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('outputProject').textContent = '>>> Error: Masukkan angka yang valid!';
            return;
        }
        
        const tambah = a + b;
        const kurang = a - b;
        const kali = a * b;
        const bagi = b !== 0 ? (a / b).toFixed(2) : 'Error: Tidak bisa bagi dengan 0';
        
        const output = `=== KALKULATOR SEDERHANA ===
>>> a = ${a}
>>> b = ${b}

>>> Penjumlahan (${a} + ${b}) = ${tambah}
>>> Pengurangan (${a} - ${b}) = ${kurang}
>>> Perkalian (${a} * ${b}) = ${kali}
>>> Pembagian (${a} / ${b}) = ${bagi}

✅ Selesai!`;
        document.getElementById('outputProject').textContent = output;
    }

    // QUIZ FUNCTIONS
    function switchQuiz(quizId) {
        const quizSections = document.querySelectorAll('.quiz-section');
        const quizBtns = document.querySelectorAll('.quiz-tab-btn');
        
        quizSections.forEach(q => q.classList.remove('active'));
        quizBtns.forEach(b => b.classList.remove('active'));
        
        document.getElementById(quizId).classList.add('active');
        event.target.classList.add('active');
    }

    function checkQuizBasic() {
        const answers = {
            q1: 'str',
            q2: '20',
            q3: 'Halo Python'
        };
        
        let score = 0;
        
        for (let [key, correctAnswer] of Object.entries(answers)) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            const resultElement = document.getElementById(`result${key.slice(-1)}`);
            
            if (!selected) {
                resultElement.innerHTML = '⚠️ Belum menjawab';
                resultElement.classList.add('show');
                resultElement.classList.remove('correct', 'wrong');
                continue;
            }
            
            const isCorrect = selected.value === correctAnswer;
            if (isCorrect) score++;
            
            resultElement.classList.add('show');
            resultElement.classList.add(isCorrect ? 'correct' : 'wrong');
            resultElement.innerHTML = isCorrect 
                ? `✅ Benar! Jawaban: ${correctAnswer}` 
                : `❌ Salah! Jawaban yang benar: ${correctAnswer}`;
        }
        
        updateProgress(1);
        showScore('Dasar', score, 3);
    }

    function checkQuizIntermediate() {
        const answers = {
            q4: '2',
            q5: 'nama_panjang',
            q6: '6'
        };
        
        let score = 0;
        
        for (let [key, correctAnswer] of Object.entries(answers)) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            const qNum = parseInt(key.slice(-1)) - 3;
            const resultElement = document.getElementById(`result${key.slice(-1)}`);
            
            if (!selected) {
                resultElement.innerHTML = '⚠️ Belum menjawab';
                resultElement.classList.add('show');
                resultElement.classList.remove('correct', 'wrong');
                continue;
            }
            
            const isCorrect = selected.value === correctAnswer;
            if (isCorrect) score++;
            
            resultElement.classList.add('show');
            resultElement.classList.add(isCorrect ? 'correct' : 'wrong');
            resultElement.innerHTML = isCorrect 
                ? `✅ Benar! Jawaban: ${correctAnswer}` 
                : `❌ Salah! Jawaban yang benar: ${correctAnswer}`;
        }
        
        updateProgress(2);
        showScore('Menengah', score, 3);
    }

    function checkQuizAdvanced() {
        const answers = {
            q7: '13',
            q8: '100-string',
            q9: '12'
        };
        
        let score = 0;
        
        for (let [key, correctAnswer] of Object.entries(answers)) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            const resultElement = document.getElementById(`result${key.slice(-1)}`);
            
            if (!selected) {
                resultElement.innerHTML = '⚠️ Belum menjawab';
                resultElement.classList.add('show');
                resultElement.classList.remove('correct', 'wrong');
                continue;
            }
            
            const isCorrect = selected.value === correctAnswer;
            if (isCorrect) score++;
            
            resultElement.classList.add('show');
            resultElement.classList.add(isCorrect ? 'correct' : 'wrong');
            let displayAnswer = correctAnswer;
            if (correctAnswer === '100-string') displayAnswer = '100 (string)';
            resultElement.innerHTML = isCorrect 
                ? `✅ Benar! Jawaban: ${displayAnswer}` 
                : `❌ Salah! Jawaban yang benar: ${displayAnswer}`;
        }
        
        updateProgress(3);
        showScore('Sulit', score, 3);
    }

    function resetQuiz(quizId) {
        const quizSection = document.getElementById(quizId);
        const inputs = quizSection.querySelectorAll('input[type="radio"]');
        const results = quizSection.querySelectorAll('.quiz-result');
        
        inputs.forEach(input => input.checked = false);
        results.forEach(result => {
            result.classList.remove('show', 'correct', 'wrong');
            result.innerHTML = '';
        });
        
        document.getElementById('quizScore').style.display = 'none';
    }

    function updateProgress(level) {
        const progress = (level / 3) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
    }

    function showScore(level, score, total) {
        const percentage = (score / total) * 100;
        let message = '';
        
        if (percentage === 100) {
            message = `🎉 Sempurna! Kamu menjawab semua dengan benar!`;
        } else if (percentage >= 66) {
            message = `👏 Bagus! Kamu memahami materi dengan baik.`;
        } else if (percentage >= 50) {
            message = `📚 Lumayan! Pelajari kembali materi yang kurang.`;
        } else {
            message = `💪 Terus semangat! Jangan menyerah untuk belajar lagi.`;
        }
        
        document.getElementById('scoreText').innerHTML = `
            <strong>Level: ${level}</strong><br>
            Skor: ${score}/${total} (${Math.round(percentage)}%)<br><br>
            ${message}
        `;
        document.getElementById('quizScore').style.display = 'block';
        document.getElementById('quizScore').scrollIntoView({ behavior: 'smooth' });
    }

    // SCROLL ANIMATION
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.scroll-fade');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight * 0.75 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    });

    // Trigger animation on load
    window.addEventListener('load', () => {
        const elements = document.querySelectorAll('.scroll-fade');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight * 0.75 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    });