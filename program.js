// importujemy modul

var os = require('os');

process.stdin.setEncoding('utf-8');

// ustawienie nasluchiwania na zdarzenia odczytu

process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!');
				process.exit();
				break;
			case '/info':
				process.stdout.write('Your version Node.js: ' + process.versions.node + '\n' + 'System Language : ' + process.env.LANG + '\n');
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});