/**
 * Pantalla de Bienvenida CCASA
 */

import { createElement } from '../utils/dom-helpers.js';
import { createGlassContainer } from './GlassContainer.js';
import { createGlassButton } from './GlassButton.js';
import { createHfIcon } from './HfIcon.js';
import { GLASS_EFFECTS } from '../utils/constants.js';

export function createWelcomeScreen(onStart) {
    const wrapper = createElement('div', {
        className: 'absolute inset-0 flex items-center justify-center p-8',
        style: 'color: #FFFFFF;'
    });

    const content = createElement('div', {
        className: 'max-w-2xl w-full space-y-8'
    });

    // Tarjeta principal con logotipo
    const titleCard = createGlassContainer({
        className: 'rounded-3xl shadow-2xl hover-scale-105 transition-transform text-center',
        role: 'banner',
        children: []
    });

    const titleContent = createElement('div', { className: 'p-8 space-y-4' });

    const logo = createElement('img', {
        src: 'https://ccasa.eus/image/layout_set_logo?img_id=1611483&t=1764213428468',
        alt: 'Logo CCASA',
        className: 'mx-auto mb-4',
        style: 'width: 140px; height: auto;'
    });

    const title = createElement('h1', {
        className: 'text-4xl font-bold mb-2',
        text: 'CCASA Online Video Análisis',
        style: 'color: #000000;'
    });

    const subtitle = createElement('p', {
        className: 'text-lg',
        html: `Análisis de vídeo en tiempo real con <a href="https://huggingface.co/onnx-community/FastVLM-0.5B-ONNX" class="underline" target="_blank" rel="noopener noreferrer" style="color:#CC0000;">FastVLM-0.5B</a>`,
        style: 'color: #666666;'
    });

    titleContent.appendChild(logo);
    titleContent.appendChild(title);
    titleContent.appendChild(subtitle);
    titleCard.appendChild(titleContent);

    // Estado de la cámara
    const statusCard = createGlassContainer({
        bgColor: GLASS_EFFECTS.COLORS.SUCCESS_BG,
        className: 'rounded-2xl shadow-2xl hover-scale-105 transition-transform',
        role: 'status',
        ariaLabel: 'Estado de la cámara',
        children: []
    });

    const statusContent = createElement('div', { className: 'p-4' });

    const statusFlex = createElement('div', {
        className: 'flex items-center justify-center space-x-2'
    });

    const statusDot = createElement('div', { className: 'status-indicator' });

    const statusText = createElement('p', {
        className: 'font-medium',
        text: 'Cámara lista',
        style: 'color: #CC0000;'
    });

    statusFlex.appendChild(statusDot);
    statusFlex.appendChild(statusText);
    statusContent.appendChild(statusFlex);
    statusCard.appendChild(statusContent);

    // Cómo funciona
    const howItWorksCard = createGlassContainer({
        className: 'rounded-2xl shadow-2xl hover-scale-105 transition-transform',
        role: 'region',
        children: []
    });

    const howItWorksContent = createElement('div', { className: 'p-6' });

    const howItWorksTitle = createElement('h2', {
        className: 'text-lg font-semibold mb-4 text-center',
        text: 'Cómo funciona:',
        style: 'color: #000000;'
    });

    const stepsList = createElement('div', { className: 'space-y-3' });

    const gray = 'color:#666666;';

    // Paso 1
    const step1 = createElement('div', { className: 'flex items-start space-x-3' });
    const badge1 = createElement('div', { className: 'numbered-badge', text: '1' });
    const step1Text = createElement('p', {
        className: 'text-gray-300',
        html: `Vas a cargar <a href="https://huggingface.co/onnx-community/FastVLM-0.5B-ONNX" style="color:#CC0000;" target="_blank" rel="noopener noreferrer">FastVLM-0.5B</a>, un modelo multimodal que se ejecuta en tu navegador.`,
        style: gray
    });
    step1.appendChild(badge1);
    step1.appendChild(step1Text);

    // Paso 2
    const step2 = createElement('div', { className: 'flex items-start space-x-3' });
    const badge2 = createElement('div', { className: 'numbered-badge', text: '2' });
    const step2Text = createElement('p', { className: 'text-gray-300', style: gray });
    const hfIcon = createHfIcon();
    step2Text.innerHTML = `
        Todo se ejecuta localmente con 
        <a href="https://github.com/huggingface/transformers.js" style="color:#CC0000;" target="_blank">Transformers.js</a>.
        No se envían datos a ningún servidor.`;
    step2Text.insertBefore(hfIcon, step2Text.firstChild.nextSibling);
    step2.appendChild(badge2);
    step2.appendChild(step2Text);

    // Paso 3
    const step3 = createElement('div', { className: 'flex items-start space-x-3' });
    const badge3 = createElement('div', { className: 'numbered-badge', text: '3' });
    const step3Text = createElement('p', {
        text: 'Haz clic en el botón para comenzar.',
        style: gray
    });
    step3.appendChild(badge3);
    step3.appendChild(step3Text);

    stepsList.appendChild(step1);
    stepsList.appendChild(step2);
    stepsList.appendChild(step3);

    howItWorksContent.appendChild(howItWorksTitle);
    howItWorksContent.appendChild(stepsList);
    howItWorksCard.appendChild(howItWorksContent);

    // Botón inicio
    const buttonContainer = createElement('div', {
        className: 'flex flex-col items-center space-y-4'
    });

    const startButton = createGlassButton({
        className: 'px-8 py-4 rounded-2xl',
        onClick: onStart,
        ariaLabel: 'Iniciar análisis de vídeo',
        children: [
            createElement('span', {
                className: 'font-semibold text-lg',
                text: 'Iniciar análisis',
                style: 'color:#FFFFFF;'
            })
        ],
        style: `background-color:#CC0000;`
    });

    const hint = createElement('p', {
        className: 'text-sm opacity-80',
        text: 'El modelo se cargará cuando pulses el botón',
        style: gray
    });

    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(hint);

    content.appendChild(titleCard);
    content.appendChild(statusCard);
    content.appendChild(howItWorksCard);
    content.appendChild(buttonContainer);
    wrapper.appendChild(content);

    return wrapper;
}
