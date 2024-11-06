import React from 'react';

export interface ChromeProps extends React.PropsWithChildren {
    onClickBack: (ev) => any
}
export default function Chrome({ children, onClickBack }: ChromeProps) {
    return (
        <div className="relative rounded-lg border border-slate-300 h-full overflow-hidden">
            <div className="w-full h-full flex flex-col ">
                <div className=" w-full grid grid-cols-[auto,1fr,auto] items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 dark:border-slate-600 dark:bg-slate-800 bg-slate-100 px-3 min-h-[48px] dark:text-white light:text-slate text-sm">
                    <a href="#" aria-label="click to go back" onClick={onClickBack}>←</a>
                    <div className="w-full flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-1 h-[26px] text-slate-600 dark:text-slate-400">
                        /list
                    </div>
                </div>
                <div className="w-full h-full bg-white overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}