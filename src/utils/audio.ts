/**
 * Web Audio API gentle ambient chime synthesizer
 * Creates warm, peaceful meditative bell tones without external audio file dependencies.
 */

class ChimePlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Pentatonic serene scale notes (frequencies in Hz)
  private notes = [
    261.63, // C4
    329.63, // E4
    392.00, // G4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    1046.50 // C6
  ];

  private playChime(freq: number, time: number, duration: number = 3.5, gainLevel: number = 0.08) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Warm harmonics
    const harmonicOsc = this.ctx.createOscillator();
    const harmonicGain = this.ctx.createGain();
    harmonicOsc.type = 'triangle';
    harmonicOsc.frequency.setValueAtTime(freq * 2, time);

    harmonicGain.gain.setValueAtTime(0, time);
    harmonicGain.gain.linearRampToValueAtTime(gainLevel * 0.25, time + 0.05);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.7);

    // Main envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(gainLevel, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    harmonicOsc.connect(harmonicGain);
    harmonicGain.connect(this.ctx.destination);

    osc.start(time);
    harmonicOsc.start(time);

    osc.stop(time + duration);
    harmonicOsc.stop(time + duration);
  }

  private playSequence() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // Gentle 4-note ascending chord arpeggio
    const sequence = [
      { note: this.notes[0], delay: 0 },
      { note: this.notes[2], delay: 0.35 },
      { note: this.notes[3], delay: 0.7 },
      { note: this.notes[5], delay: 1.05 },
      { note: this.notes[7], delay: 1.5 },
    ];

    sequence.forEach(({ note, delay }) => {
      this.playChime(note, now + delay, 4.0, 0.06);
    });

    // Schedule next gentle chime cycle in 8-10 seconds
    if (this.isPlaying) {
      this.timer = window.setTimeout(() => {
        this.playSequence();
      }, 9000);
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    this.isPlaying = true;
    this.playSequence();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const chimePlayer = new ChimePlayer();
