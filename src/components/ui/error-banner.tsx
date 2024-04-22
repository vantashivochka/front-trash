import React from "react";

const ErrorBanner: React.FC = () => {
  return (
    <div className="text-center text-destructive my-10">
      Виникла помилка. Перезавантажте сторінку або зверніться до адміністратора.
    </div>
  );
};

export default ErrorBanner;
