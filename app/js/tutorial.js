skidinc.tutorial = {};
skidinc.tutorial.enabled = true;
skidinc.tutorial.finish = false;
skidinc.tutorial.step = 0;

skidinc.tutorial.switchStep = function(step) {
    skidinc.tutorial.step = step;
    skidinc.tutorial.core();
};

skidinc.tutorial.begin = function() {
    if (!this.enabled || this.finish) {
        $('.intro').remove();
        $('.game').fadeIn('fast', function() {
            $('#command-input').focus();
        });
        
        return;
    };
    
    this.core();
};

skidinc.tutorial.finished = function() {
    skidinc.tutorial.enabled = false;
    skidinc.tutorial.finish = true;

    $('.intro').fadeOut('fast', function() {
        $('.intro').remove();
        $('.game').fadeIn('fast', function() {
            $('#command-input').focus();
        });
    });
};

skidinc.tutorial.skip = function() {
    skidinc.console.inputEnabled = true;
    skidinc.tutorial.finished();
};

skidinc.tutorial.core = function() {
    switch(this.step) {
        case 0:
            skidinc.console.inputEnabled = false;
            
            skidinc.console.print('<h>Einführung</h> Willkommen zu <b>HackerTron</b>, ein Idle-Game bei dem es ums Hacken geht! Ich bin ein kleines Tutorial, das erklärt, wie man dieses Spiel spielt. Bevor Du beginnst, Du musst keine Programmierkenntnisse oder ähnliches haben, um das Spiel zu verstehen und zu genießen.', function() {
                skidinc.console.print('<h>Anfänger HowTo</h> Wenn Du es also noch nicht bemerkt hast, ist dies das Terminal. Hier findet alles statt. Das Terminal ist unterteilt in <b>2 Teile</b>, <b>Protokolle auch logs genannt</b> (wo Dinge Protokolliert werden) und die <b>Eingabe auch Input genannt</b> wo du Befehle eingeben kannst (weiteres bei dem <b>hackatron@root</b> Ding).', function() {
                    skidinc.console.print('<h>Anleitung 1</h> Bevor wir dieses Abenteuer beginnen, müssen wir deinen Benutzernamen kennen. Um deinen Benutzernamen festzulegen, müssen wir einen Befehl eingeben, wofür ein Argument erforderlich ist. Dieser Befehl lautet <b>username [deinUsername]</b>, dabei ist <b>username</b> der Befehl und <b>[deinUsername]</b> ist das Argument des Befehls <b>(und bitte setze dein username ohne die klammern [])</b> (Achtung! Du kannst deinen username später nicht mehr ändern!).', function() {
                        skidinc.console.inputEnabled = true;
                    });
                });
            });
            break;
        
        case 1:
            skidinc.console.inputEnabled = false;
            
            skidinc.console.print('<h>Anleitung 2</h> Du kannst dir eine Liste aller verfügbaren Befehle anzeigen lassen in dem du <b>help</b> in die Console/Terminal eingibst. Probiere es doch gleich mal aus und lasse dir alle verfügbaren Befehle anzeigen.', function() {
                skidinc.console.inputEnabled = true;
            });
            break;
        
        case 2:
            setTimeout(function() {
                skidinc.console.inputEnabled = false;
                
                skidinc.console.print('<h>Anleitung 3</h> So da wir uns jetzt ein wenig mit dem Terminal vertraut gemacht haben kommen wir nun zum <b>script</b> Befehl. Dieser Befehl führt ein Skript aus, was einige Zeit in Anspruch nehmen wird. Wenn er jedoch abgeschlossen ist, verdienen wir etwas Geld und Erfahrung damit. Du kannst dir eine Liste aller verfügbaren Scripte einzigen lassen in dem du volgendes argument eingibst <b>-l/-list</b>, so sollte der ganze Befehl mit dem Argument zusammen aussehen <b>script -l</b> oder <b>script -list</b>. Na dann dass uns mal das erste script ausführen.', function() {
                    skidinc.console.inputEnabled = true;
                });
            }, 5000);
            break;
        
        case 3:
            skidinc.console.inputEnabled = false;
            
            setTimeout(function() {
                skidinc.console.print('<h>Du hast die Einführung erfolgreich abgeschlossen</h> Sauber, nun bist du bereit ein Hacker zu werden auf geht es zum richtigen Teil des Spiels. Mav und WuMiX wünschen dir dabei viel Erfolg.', function() {
                    setTimeout(function() {
                        skidinc.console.inputEnabled = true;
                        skidinc.tutorial.finished();
                    }, 5000);
                });
            }, 2000);
            break;
    };
};