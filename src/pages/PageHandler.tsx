import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled, Button } from "@mui/material";

const StyledDiv = styled("div")(
	(props) => `
    display: flex;
    max-width: 1280px;
    margin: auto;
    height: 100%;
    background-color: black;
`
);

const PageHandler = ({ page }: { page: string | undefined }) => {
	console.log(page);
	const pageNumber = parseInt(page || "1");
	console.log(pageNumber);
	const router = useRouter();
	return (
		<StyledDiv>
			<Button
				variant="contained"
				onClick={() => router.push(`/${pageNumber - 1}`)}
				// disabled={!!(pageNumber - 1)}
			>
				Previous
			</Button>
			<Button
				variant="contained"
				onClick={() => router.push(`/${pageNumber + 1}`)}
				// disabled={!!(pageNumber - 1)}
			>
				Next
			</Button>
		</StyledDiv>
	);
};

export default PageHandler;
