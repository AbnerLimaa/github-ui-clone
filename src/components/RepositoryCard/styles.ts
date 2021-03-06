import styled from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 6px;
`;

export const TopSide = styled.div`
    > header {
        display: flex;
        align-items: center;

        > a {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--link);
            text-decoration: none;

            &:focus, 
            &:hover {
                text-decoration: underline;
            }
        }
    }

    > p {
        margin: 8px 0px 16px;
        font-size: 12px;
        color: var(--gray);
        letter-spacing: 0.1px;
    }

`;

export const BottomSide = styled.div`
    > ul {
        display: flex;
        align-items: center;

        > li {
            display: flex;
            align-items: center;
            margin-right: 16px;

            > span {
                margin-left: 5px;
                font-size: 12px;
                color: var(--gray);
            }
        }
    }

    .language {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;

        &.javascript {
            background: var(--javascript);
        }
        &.typescript {
            background: var(--typescript);
        }
        &.other {
            background: var(--other-language);
        }
    }
`;

export const RepoIcon = styled(RiBookMarkLine).attrs({
    className: "iconCss"
})``;

export const StarIcon = styled(RiStarLine).attrs({
    className: "iconCss"
})``;

export const ForkIcon = styled(AiOutlineFork).attrs({
    className: "iconCss"
})``;