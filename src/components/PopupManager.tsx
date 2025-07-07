import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const PopupManager: React.FC = () => {
  const { popup, hidePopup } = usePopup();

  useEffect(() => {
    if (popup.isVisible) {
      const timer = setTimeout(() => {
        hidePopup();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [popup.isVisible, hidePopup]);

  if (!popup.isVisible) return null;

  const getIcon = () => {
    switch (popup.type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-amber-500" />;
      default:
        return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getBgColor = () => {
    switch (popup.type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className={`max-w-md w-full rounded-2xl border shadow-2xl p-6 animate-scale-in ${getBgColor()}`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            {popup.content}
          </div>
          <button
            onClick={hidePopup}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupManager;