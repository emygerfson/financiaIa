import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Input  } from "../../components/shared/Input";
import {type InputProps} from '../../components/shared/Input'
import { Buttom } from '../../components/shared/Buttom';
import { type SyntheticEvent } from "react";
import{useState} from 'react'
export interface FormStepProps {
    id: string;
    icon: LucideIcon;
    title:string;
    question: string;
    inputProps: InputProps;
    submitButtomProps?: {label?:string, emojiIcon?:string};
    
}
interface ActionButtomProps {
  onBack: () => void;
  onNext: () => void;
  hadeBackButtom?: boolean
}
export function FormStep({ icon: Icon, title, question, inputProps, submitButtomProps, onBack, onNext, hadeBackButtom }: FormStepProps & ActionButtomProps) {
  const [intupValue, setInputValue] = useState('');
  
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!intupValue) {
      return;
    }
    onNext(); 
  }
  return (
    <div className="bg-card rounded-2xl p-6 shadow[4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="bg-primary mb-4 flex h-15 w-15 items-center justify-center rounded-xl">
        <Icon size={32} className="text-primary-foreground" />
      </div>
      
        <h2 className="text-primary mb-1 text-xs font-semibold tracking-widest uppercase">{title}</h2>
        <h3 className="text-foreground mb-6 text-xl leading-snug font-semibold sm:text-2xl">{question}</h3>
        <form onSubmit={handleSubmit}>
          <Input {...inputProps}
            value={intupValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            { !hadeBackButtom && (
              
              <Buttom 
                type="buttom"
                onClick={onBack}
                variant="ghost"
                className="order-2 flex-1 sm:order-1"
                icon={ArrowLeft}
               
              >
                
                Voltar
              </Buttom>
            )}

            <Buttom
              type="submit"
              variant="primary"
              className="order-1 flex-1 sm:order-2"
              incon={!submitButtomProps?.emojiIcon ? ArrowRight : undefined}
               disabled={!intupValue}
            >
              { submitButtomProps?.label ?? "Proximo"}
              { submitButtomProps?.emojiIcon }
            </Buttom>
          </div>
        </form>
    </div>
  );
}
