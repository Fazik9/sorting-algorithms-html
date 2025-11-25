'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');

// 
// Activity 1 — Spot the Difference (Sync vs Callback)
// 

function activity1() {
  console.log('\n=== Activity 1: Sync vs Callback ===');

  console.log('--- sync.js ---');
  console.log('START');
  const data = fs.readFileSync('./content.txt', { encoding: 'utf8' });
  console.log('[sync] file contents:', data.trim());
  console.log('END');

  console.log('\n--- async.js ---');
  console.log('START');
  fs.readFile('./content.txt', { encoding: 'utf8' }, (err, data2) => {
    if (err) return console.error('[async] read error:', err);
    console.log('[async] file contents:', data2.trim());
    console.log('END (inside callback)');
  });
  console.log('END (outside callback)');
}

// Activity 2 — Text Normalizer (Sync)
// 

function activity2() {
  console.log('\n=== Activity 2: Text Normalizer (Sync) ===');
  try {
    const input = fs.readFileSync('notes.txt', { encoding: 'utf8' });
    const transformed = input
      .split('\n')
      .map(line => line.trim().toLowerCase())
      .join('\n');
    fs.writeFileSync('notes.normalized.txt', transformed, { encoding: 'utf8' });
    console.log('Normalized to notes.normalized.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

// 
// Activity 3 — Logger with Append (Sync)
// 

function activity3() {
  console.log('\n=== Activity 3: Logger with Append ===');
  fs.writeFileSync('app.log', `${new Date().toISOString()} - ping\n`, { flag: 'a' });
  console.log('Logged a ping to app.log');
}

// 
// Activity 4 — Encoding Explorer (Callback)
// 

function activity4() {
  console.log('\n=== Activity 4: Encoding Explorer ===');
  fs.readFile('emoji.txt', { encoding: 'utf8' }, (err, text) => {
    if (err) return console.error('[utf8] error:', err);
    console.log('[utf8] text:', text);

    fs.readFile('emoji.txt', (err2, buf) => {
      if (err2) return console.error('[raw] error:', err2);
      console.log('[raw] length:', buf.length);
      console.log('[hex]:', buf.toString('hex'));

      fs.readFile('emoji.txt', (err3, buf2) => {
        if (err3) return console.error('[base64] error:', err3);
        console.log('[base64]:', buf2.toString('base64'));
      });
    });
  });
}

// 
// Activity 5 — Parallel Reads (Callback)
// 

function activity5() {
  console.log('\n=== Activity 5: Parallel Reads ===');

  function printResult(label, err, data) {
    if (err) console.error(`[${label}] error:`, err);
    else console.log(`[${label}] ${data.toString().trim()}`);
  }

  console.log('Kicking off reads...');
  fs.readFile('a.txt', (e, d) => printResult('a', e, d));
  fs.readFile('b.txt', (e, d) => printResult('b', e, d));
  fs.readFile('c.txt', (e, d) => printResult('c', e, d));
}

//
// Activity 6 — Migrate Sync → Callback (Refactor)

function activity6() {
  console.log('\n=== Activity 6: Normalize with Callback ===');
  fs.readFile('notes.txt', { encoding: 'utf8' }, (readErr, input) => {
    if (readErr) return console.error('Read error:', readErr);

    const transformed = input
      .split('\n')
      .map(line => line.trim().toLowerCase())
      .join('\n');

    fs.writeFile('notes.normalized.txt', transformed, { encoding: 'utf8' }, writeErr => {
      if (writeErr) return console.error('Write error:', writeErr);
      console.log('Normalized (async) to notes.normalized.txt');
    });
  });
}