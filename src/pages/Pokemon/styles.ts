import styled from 'styled-components';

import { theme } from '@/styles.ts';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;
export const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  gap: 14px;
`;

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 0 3px -1px #00000066;
  background: ${theme.colors.textPrimary};
  color: ${theme.colors.white};
`;
export const Summary = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
`;

// detaild page
export const Card = styled.article`
  max-width: 900px;
  margin: 16px auto;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const Header = styled.header`
  padding: 20px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  color: white;
  text-align: center;
  & h1 {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  & img {
    width: 32px;
  }
`;

export const Body = styled.main`
  padding: 24px;
  display: flex;
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    align-items: center;
  }
`;
export const DataSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Specs = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
  & > div {
    padding: 12px 16px;
    background-color: ${theme?.colors.cardImage};
    border-radius: ${theme?.radius.md};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 4px;
    text-align: center;
  }
`;
export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;
export const ImageWrapper = styled.div`
  width: 330px;
  max-width: 100%;
  border-radius: 50%;
  overflow: hidden;
  padding: 16px;
  aspect-ratio: 1 / 1;
  background-color: ${theme?.colors.cardImage};
  margin: 0 auto;
`;

export const StateItem = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StateValue = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  & h4 {
    font-weight: bold;
  }
`;
export const StateLineWrapper = styled.div`
  height: 8px;
  background-color: ${theme?.colors.stateLineBack};
  border-radius: 999px;
  overflow: hidden;
`;
export const StateLine = styled.div`
  height: 100%;
  background-color: ${theme?.colors.stateLineFront};
`;
export const AbilitySection = styled.section`
  margin-top: 12px;
`;
export const AbilityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;
export const AbilityRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 12px;
  & h4 {
    background-color: ${theme?.colors.stateLineBack};
    padding: 6px 12px;
    font-size: 12px;
    border-radius: ${theme?.radius.lg};
    text-transform: capitalize;
  }
`;
export const TypesWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;
export const TypeItem = styled.h4`
  background-color: #d9565d;
  color: ${theme?.colors.white};
  padding: 6px 12px;
  font-size: 14px;
  border-radius: ${theme?.radius.lg};
  text-transform: capitalize;
`;
export const ExperienceNumber = styled.strong`
  color: #834dbb;
  margin-top: 8px;
  font-size: 24px;
  display: block;
`;
