import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

import { validateIsbn } from '../../../services/books';

import { Video, Container, ScanMarker } from './styles';

function Scanner({ onScan }) {
  let scannerAttempts = 0;

  const onDetected = result => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      onScan(isbn);
      return;
    } else {
      if (scannerAttempts >= 5) {
        alert('Não foi possível ler o código');
      }
    }
    scannerAttempts++;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#video'),
          constraints: {
            facingMode: 'environment',
          },
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader'],
        },
      },
      err => {
        if (err) {
          console.error(err);
          alert(
            'Erro ao abrir a câmera do dispositivo, dê a permissão de uso.'
          );
          return;
        }
        Quagga.start();
      },

      Quagga.onDetected(onDetected),
      );
    }
  }, []
  );

  return (
    <div>
      <Video id='video' />
      <Container>
        <ScanMarker>
          <img
            src="../../../assets/images/barcode.svg"
            alt="Marca para barcode"
            width="260"
            height="240"
          />
          <p className="label">Aponte para o código de barras</p>
        </ScanMarker>
      </Container>
    </div>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func,
};

export default Scanner;
