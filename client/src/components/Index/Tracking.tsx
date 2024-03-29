import '../../index.css';

function BannerTracking() {
  return (
    <div className="h-[480px] bg-[#121F33] mt-[-50px]">
      <h1 className="relative text-lx text-center mb-24 text-[2rem] font-bold text-white nunito-font">
        Como rastrear objetos, encomendas ou pacotes no axeicaixa em 3 passos:
      </h1>
      <div className="flex w-full">
        <div className="bg-[#121F33] w-1/3 text-center h-full mx-7">
          <h2 className="text-white font-bold text-[20px] mb-12 nunito-font">
            Cadastre os códigos de objetos
          </h2>
          <svg
            className="h-24 m-auto"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z" />
          </svg>
          <p className="text-white mt-4 font-medium text-[16px] nunito-font max-w-[90%] mx-auto">
            Comprou aquele presente bonitinho na China? Enviou um documento para
            um amigo? Está aguardando um perfume? Quer apenas monitorar um
            pacote? Você só precisa nos informar o código de rastreamento que
            organizamos tudo pra você.
          </p>
        </div>
        <div className="bg-[#121F33] w-1/3 text-center h-full mx-7">
          <h2 className="text-white font-bold text-[20px] mb-12 nunito-font">
            Correios, China Post, Aliexpress, Shopee e Gear Best
          </h2>
          <svg
            className="h-24 m-auto"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20,8H17V4H3C1.9,4 1,4.9 1,6V17H3C3,18.7 4.3,20 6,20H15C15,18.7 16.3,20 18,20H23V12L20,8M6,18.5C5.2,18.5 4.5,17.8 4.5,17M15,15H8.2C7.7,14.4 6.9,14 6,14H3V6H15V15M18,18.5C17.2,18.5 16.5,17.8 16.5,17M17,12V9.5H19.5L21.5,12H17M6,11V9H12V11H6Z" />
          </svg>
          <p className="text-white mt-4 font-medium text-[16px] nunito-font max-w-[90%] mx-auto">
            Gerencie todas as suas encomendas num só local. Saiba quais pacotes
            foram tributados, quais estão chegando, quais estão atrasados e
            muitos mais! Tudo isso numa interface simplificada, com filtros,
            nomes, tags. E ainda totalmente integrado ao seu telefone através
            dos nossos aplicativos!
          </p>
        </div>
        <div className="bg-[#121F33] w-1/3 text-center h-full mx-7">
          <h2 className="text-white font-bold text-[20px] mb-12 nunito-font">
            Tudo isso acompanhado de notificações
          </h2>
          <svg
            className="h-24 m-auto"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10,21H14C14,22.1 13.1,23 12,23C10.9,23 10,22.1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4C10,2.9 10.9,2 12,2C13.1,2 14,2.9 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11C17,8.24 14.76,6 12,6C9.24,6 7,8.24 7,11V18H17V11M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z" />
          </svg>
          <p className="text-white mt-4 font-medium text-[16px] nunito-font max-w-[90%] mx-auto">
            Seja notificado todas as vezes que ocorrer qualquer mudança nos seus
            rastreios. O Muambator avisa você por e-mail, ou no seu celular.
            Você tem uma loja na Internet? É possível customizar suas
            notificações!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerTracking;
